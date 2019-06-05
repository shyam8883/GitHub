var  tm = require("text-miner");
var fs = require("fs");
var fsm = require("fs-minipass");
var express = require("express");
var app = express();

fs.readFile("./sample.txt",function(err,data){
    if(err) throw err;
   var tm = require("text-miner");
   var myCorpus = new tm.Corpus([]);
    
 myCorpus.addDocs([data.toString()]);

 myCorpus.removeWords(tm.STOPWORDS.EN);
 myCorpus.removeInterpunctuation();
 myCorpus.clean();
 
 var terms = new tm.DocumentTermMatrix(myCorpus);
 app.get("/",function(req,res){
     res.send(terms.findFreqTerms(4));
 });
 app.listen(3000, ()=>{console.log("Listening")})
 
   
});



