var mongoose = require("mongoose");

var LogSchema = new mongoose.Schema({
    projectId:String,
    startTime:String,
    endTime:String,
    phoneId:String,
    Log:[{date:String,pid:String,tid:String,priority:String,tag:String,message:String}]
});



export default LogSchema;