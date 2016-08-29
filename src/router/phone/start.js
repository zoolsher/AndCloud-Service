import Router from './../Router';
let client = require("adbkit").createClient();
import mongoose from 'mongoose';
import {Log} from './../../model/index';
class Start extends Router {
    constructor() {
        super();
    }
    action() {
        super.action();
        this.logger.info("start log cat");
        client.listDevices().then(
            (devices) => {
                console.log(devices);
                if (devices.length > 0) {
                    var device = devices[0];
                    var phoneId = device.id
                    console.log(phoneId);
                    var log = new Log({
                        projectId: "",
                        startTime: Date.now().toString(),
                        endTime: Date.now().toString(),
                        phoneId: phoneId,
                        log: []
                    })
                    console.log(log);
                    log.save()
                        .then((args) => {
                            console.log(args);
                            return client.openLogcat(phoneId)
                        })
                        .then((logcatReader) => {
                            logcatReader.on("entry", function (entry) {

                            })
                        })
                        .catch((e) => {
                            this.logger.error("there was a bug when opening logcat, err is %j", e);
                        })

                    return null;
                } else {
                    return null;
                }
            }
        )
    }

}

export default Start;