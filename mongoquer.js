const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("music");
	//var query = {name:"Beetles"};
	dbo.collection("albums").find().toArray(function(err, result){
		if(err) throw err;
		console.log(result);		
		
		db.close();
	});
});