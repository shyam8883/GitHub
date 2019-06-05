var path = require("path");

var ejs = require("ejs");
var bodyparser = require("body-parser");
var express = require("express");
var app = express();
//var data = [{item:"Get up"},{item: "Make Tea"},{item:"Have breakfast"}];
var urlencodedParser = bodyparser.urlencoded({extended:false});
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/SS_Db");
//app.set("view engine", "pug");
//app.use(express.static("./public"));
var todoSchema = new mongoose.Schema({item:String});
var data = mongoose.model("data",todoSchema);
app.set("view engine","ejs");
//var itemOne = data({item : "Buy Flowers"}).save(function(err){
	//if(err) throw err;
	//console.log("Item Saved");

//})

app.set("views",path.join(__dirname,"views"));
app.get("/new_html",function(req,res){
	data.find({},function(err,data){

	if(err) throw err;
	res.render("new_html",{todos:data});
});
});
app.post("/new_html",urlencodedParser,function(req,res){
	 //data.push(req.body);
	var new_data = data(req.body).save(function(err,data){ 
		if(err)	 throw err;
	res.render("new_html",{todos:data});
});
});
app.get("/new_html/:item", function(req,res){
	data.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
		if(err) throw err; 
	 res.render("new_html",{todos:data});
})
});
app.get("/cart",function(req,res){
	data.find({},function(err,data){
	if(err) throw err;
	res.render("cart",{todos:data});
});
});
app.listen(3090,()=>{console.log("Listening")});