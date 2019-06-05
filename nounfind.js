var createNounfinder = require("nounfinder");
var express = require("express");
var app = express();
var nounfinder = createNounfinder({wordnikAPIKey: 'kljhasdfkjahsdlfiq89243rsdhflksjdfhaskjhdf982kjhd'});
var text = 'car, shoes, knife.';
nounfinder.getNounsFromText(text,function done(error,nouns){
 console.log(nouns);
    
});