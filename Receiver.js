const EventEmitter = require("events");

const Recdr = require("./Recorder");

const recorder = new Recdr();
recorder.on("messageLogged", (arg)=>{
	console.log("Listener Called",arg);
});
recorder.logg("message");


