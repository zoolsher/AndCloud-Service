import ConfigData from './../config';

/**
 * connecting messageQueen from frontEnd;
 */
import ZMQ from 'zmq';
let listenPort = ConfigData["MessageQueen"]["connection"];
let sock = ZMQ.socket("pull");
sock.connect(listenPort);

/**
 * setting the channelManager to gloabl.app
 */
import {module as Util} from './until';
import {WHATEVER,CREATED_A_NEW_PROJECT} from './actionnames';
let ChannelManager = Util.ChannelManager.default;
var channelManager = ChannelManager.getInstance()
var mainChannel = channelManager.get("main");
global.app.ChannelManager = ChannelManager;
global.app.Logger = Util.Logger;
/**
 * register the message event on the messageQueen
 */
sock.on("message", function (data) {
    var action = {};
    try {
        action = JSON.parse(data);
        mainChannel.push(action);
    } catch (e) {
        Util.Logger.warn("data cannot parsed to JSOBJECt %s, err is %j", data, e);
    }
});

global.app.controllers = [];
global.app.controllers.push(require("./controller/MainController"));
