const {ObjectId} = require("mongodb");


let {mongoose} = require("../server/db/mongoose");
let {Todo} = require("../server/models/todo");
let {User} = require("../server/models/user");

// Todo.remove({}).then(result => {
// 	console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:"58f9241e17feb5d16c5af195"}).then(todo => {
	console.log(todo);
});


Todo.findByIdAndRemove("58f9241e17feb5d16c5af195").then(todo => {
	console.log(todo);
});