const EventEmitter = require("events");



class Recorder extends EventEmitter{
 logg(message){
	 console.log(message);
	 this.emit("messageLogged",{id:1,url:"http"});
 
 }
};
module.exports = Recorder;