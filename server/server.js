let express = require("express");
let bodyParser = require("body-parser");
let {ObjectID} = require("mongodb");

let {mongoose} = require("./db/mongoose");
let {Todo} = require("./models/todo");
let {User} = require("./models/user");


let app = express();
app.use(bodyParser.json());


app.post("/todos", (req, res) => {
	console.log(req.body);

	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});


app.get("/todos", (req, res) => {
	Todo.find().then((todos) => {
		res.send({ todos });
	}, (e) => {
		res.status(400).send(e);
	});
});

// GET /todos/1213434

app.get("/todos/:id", (req, res) => {

	let todoId = req.params.id;

	if(!ObjectID.isValid(todoId)){
		return res.status(404).send();
	}


	Todo.findById(todoId).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({ todo });
	}).catch(e => {
		res.status(400).send();
	});
});

app.listen(3000, () => {
	console.log("Started on port 3000");
});

module.exports = {app};