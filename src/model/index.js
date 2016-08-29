import mongoose from 'mongoose';
import Promise from 'bluebird';
import logger from './../until/Logger';
import LogSchema from './LogSchema';
mongoose.connect('mongodb://127.0.0.1:27071/ANDCLOUD')

var db = mongoose.connection;
db.on('error',function(){
    logger.error("connection error");
})

db.once('open',functiodn(){
    logger.info("connect mongodb success");
})

var Log = mongoose.model('Log',LogSchema);
export Log;
export default db;