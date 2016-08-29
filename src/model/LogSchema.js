var mongoose = require("mongoose");

var LogSchema = new mongoose.Schema({
    projectId: String,
    startTime: String,
    endTime: String,
    phoneId: String,
    log: [{ date: String, pid: String, tid: String, priority: String, tag: String, message: String }]
}, { strict: false });



export default LogSchema;