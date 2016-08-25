import ZMQ from 'zmq';
let listenPort = "tcp://127.0.0.1:3000"
let sock = ZMQ.socket("pull");
console.log("listening");
sock.connect(listenPort);
console.log("listened");

var router = {
    route:"phone/start",
    params:{
        "id":12
    },
}
import path from 'path';
import Dispatcher from "./router/dispatch";
new Dispatcher(path.join(__dirname,"router")).dispatch(router);

sock.on("message",function(data){
    console.log(data.toString());
});