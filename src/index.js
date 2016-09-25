import ZMQ from 'zmq';
let listenPort = "tcp://127.0.0.1:3000";
let sock = ZMQ.socket("pull");
sock.connect(listenPort);

import {module as Util} from './until';

let Channel = Until.Channel;
let mainChannel = new Channel();



var router = {
    route:"phone/start",
    params:{
        "id":12
    },
};
// import path from 'path';
// import Dispatcher from "./controller/dispatch";
// new Dispatcher(path.join(__dirname,"controller")).dispatch(router);

mainChannel.emit(router);

sock.on("message",function(data){
    console.log(data.toString());
});



