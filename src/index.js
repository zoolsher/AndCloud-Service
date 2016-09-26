import ZMQ from 'zmq';
let listenPort = "tcp://127.0.0.1:3000";
let sock = ZMQ.socket("pull");
sock.connect(listenPort);

import {module as Util} from './until';

import {WHATEVER} from './actionnames';

var router = {
    type:WHATEVER,
    params:{
        "id":12
    },
};

let ChannelManager = Util.ChannelManager.default;

var channelManager = ChannelManager.getInstance();

var mainChannel = channelManager.get("main");

mainChannel.pulling(WHATEVER,function(){
    console.log(arguments);//{ '0': { id: 12 } }
})

mainChannel.push(router);

console.log(mainChannel);
/**
 * Channel {
  domain: null,
  _events: { whatever: [Function] },
  _eventsCount: 1,
  _maxListeners: undefined,
  name: 'main',
  id: '7557f6b0-8337-41ae-bf51-c67b0176287d',

 */


// import path from 'path';
// import Dispatcher from "./controller/dispatch";
// new Dispatcher(path.join(__dirname,"controller")).dispatch(router);

mainChannel.emit(router);

sock.on("message",function(data){
    console.log(data.toString());
});



