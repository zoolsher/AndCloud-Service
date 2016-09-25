import Logger from './Logger';
const EventEmitter = require("events");

class Channel extends EventEmitter {
    constructor(name = "", id = "") {
        super()
        this.name = name;
        this.id = id;
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    emit(eventName, ...args) {
        super.emit(eventName, ...args)
    }
    // push(action) {
    //     var action = action || {};
    //     var type = action.type || "";
    //     var params = action.params || {};
    //     if (type == "") {
    //         Logger.warn("Channel just pushed an action with no type, the args are $j", arguments);
    //     } else {
    //         this.emit(action, params);
    //     }
    // }
    // pulling(type, callback) {
    //     this.on(type, callback);
    // }
    // unpull(type, callback) {
    //     this.removeListener(type, callback);
    // }
}

export default Channel;