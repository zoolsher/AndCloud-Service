import Logger from './Logger';
const EventEmitter = require("events");
import Promise from 'bluebird';
import {CHANNEL_SHUT_DOWN} from './../actionnames';

class Channel extends EventEmitter {
    constructor(name = "", id = "", closed = false) {
        super()
        this.name = name;
        this.id = id;
        this.closed = closed;
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    emit(eventName, ...args) {
        super.emit(eventName, ...args)
    }
    push(action) {
        if(this.closed){
            return;
        }
        var action = action || {};
        var type = action.type || "";
        var params = action.params || {};
        if (type == "") {
            Logger.warn("Channel just pushed an action with no type, the args are $j", arguments);
        } else {
            this.emit(type, params);
        }
    }
    pulling(type, callback) {
        this.on(type, callback);
    }
    unpull(type, callback) {
        this.removeListener(type, callback);
    }
    shutdown(){
        this.emit(CHANNEL_SHUT_DOWN);
        this.closed = true;
        this.removeAllListeners();
    }
}

export default Channel;