const {ObjectId} = require("mongodb");


let {mongoose} = require("../server/db/mongoose");
let {Todo} = require("../server/models/todo");
let {User} = require("../server/models/user");


// let id = "58f900b2479cf453239b31fc";

// if(!ObjectId.isValid(id)){
// 	return console.log("Id not valid");
// }

// Todo.find({
// 	_id: id
// }).then(todos => {
// 	console.log("Todos", todos);
// });


// Todo.findOne({
// 	_id: id
// }).then(todo => {
// 	console.log("Todo", todo);
// });

// Todo.findById(id).then(todo => {
// 	if(!todo){
// 		return console.log("Id not found.");
// 	}
// 	console.log("Todo by Id", todo);
// }).catch(e => console.log(e));


let userId = "58f8f01363a32c02e5bac1f2";

User.findById(userId).then(user => {
	if(!user){
		return console.log("User not found");
	}

	console.log("User: ", user);

}).catch( e => console.log(e));
