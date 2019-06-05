var path = require("path");
//var jade = require("jade");
//var fs = require("fs");
var pug =require("pug");
var express = require("express");
//var bootstrap = require("bootstrap");
//var window = require("jsdom");


var app = express();
//app.use(require("stylus").middleware(__dirname + "/public"));makes no difference in output
//app.use(express.static(path.join(__dirname,"public")));makes no difference in rendering
var data = {
		title:"NodeJS",
			author:{twitter:"azatco",
			name:"Azat"},
				tags:["Express","Nodejs","Javascript"]
}

//data.body = process.argv[2];
//fs.readFile("jadexample.jade","utf-8",function(error,source){
	//var template = jade.compile(source);
	//var html = template(data)
	//console.log(html);

app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
app.get("/",function(req,res){
	res.render("post",{article:" "});//vimp data is transferred here to the jade file. django mein pasina nikhal gaya
});

app.listen(4001, ()=>{console.log("Listening");});//Always render app on firefox. much better than chrome

