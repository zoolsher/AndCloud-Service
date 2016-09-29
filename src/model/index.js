import mongoose from 'mongoose';
import Promise from 'bluebird';
import logger from './../until/Logger';
import LogSchema from './LogSchema';
import ProjectSchema from './ProjectSchema';
mongoose.connect(global.app.configData.db.db_url);
mongoose.Promise = require('bluebird');
var db = mongoose.connection;
db.on('error',function(){
    logger.error("connection error");
})

db.once('open',function(){
    logger.info("connect mongodb success");
})

export var Log = mongoose.model('log',LogSchema);
export var Project = mongoose.model('projects',ProjectSchema);
export default db;