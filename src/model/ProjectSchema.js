var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    userid:String,
    name:String,
    apk:Object,
    createTime:String,
}, { strict: false });



export default ProjectSchema;