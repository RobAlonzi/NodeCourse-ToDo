// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID }  = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if(err){
		return console.log("Unable to connect to MongoDB server");
	}

	console.log("Connected to MongoDB server");

	// db.collection("Todos").findOneAndUpdate({
	// 	_id: new ObjectID("58f7b4520c7ad8998c9512e8")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then(result => {
	// 	console.log(result);
	// });

	db.collection("Users").findOneAndUpdate({
		_id: new ObjectID("58f7b9120c7ad8998c95146d")
	}, {
		$set: {
			name: "Jimmy"
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then(result => {
		console.log(result);
	});


	//db.close();
});