import ConfigData from './../config';

import ZMQ from 'zmq';
let listenPort = ConfigData["MessageQueen"]["connection"];
let sock = ZMQ.socket("pull");
sock.connect(listenPort);

import {module as Util} from './until';

import {WHATEVER,CREATED_A_NEW_PROJECT} from './actionnames';

let ChannelManager = Util.ChannelManager.default;

var channelManager = ChannelManager.getInstance();

var mainChannel = channelManager.get("main");

mainChannel.pulling(WHATEVER, function () {
    console.log(arguments);//{ '0': { id: 12 } }
})

mainChannel.pulling(CREATED_A_NEW_PROJECT,function(arg){
    console.log(arg);
})



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


sock.on("message", function (data) {
    console.log(data.toString());
    var action = {};
    try {
        action = JSON.parse(data);
        mainChannel.push(action);
    } catch (e) {
        Util.Logger.warn("data cannot parsed to JSOBJECt %s, err is %j", data, e);
    }
});



