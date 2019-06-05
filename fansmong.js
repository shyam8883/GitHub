const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/rockband");
var Schema = mongoose.Schema;
var personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name:String,    
    movies: [{type:Schema.Types.ObjectId,ref:"Movies"}]
});
var moviesSchema = Schema({
    title:String,
    actor: {type:Schema.Types.ObjectId,ref:"Person"},
    fan:[{type:Schema.Types.ObjectId, ref:"Person"}]
    
});
moviesSchema.pre("save",function(){console.log("Saving")});//for plugins during saving.
                                                           //pre fiired when document saved
var Person = mongoose.model("Person", personSchema);
var Movies = mongoose.model("Movies", moviesSchema);
var actor = new Person({
    _id: new mongoose.Types.ObjectId(),
    name:"Brad Pitt"    
});
actor.save(function(err,docs){
    if(err) throw err;    
});
var movies1 = new Movies({    
    title:"Jurassic Park",
    actor: actor._id    
});
movies1.save(function(err,docs){
    if(err) throw err;   
});
Movies.findOne({title:"Jurassic Park"}).
populate("actor").
exec(function(err,res){
    if(err) throw err;
    console.log(res.actor.name);
});



