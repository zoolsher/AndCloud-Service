import Router from './../Router';
let client = require("adbkit").createClient();
import mongoose from 'mongoose';
import {Log} from './../../model/index';
class Start extends Router{
    // constructor(){}
    action(){
        super.action();
        this.logger.info("start log cat");
        client.listDevices().then(
            (devices)=>{
                if(devices.length>0){
                    var device = devices[0];
                    client.openLogcat(device.id).then(
                        (logcatReader)=>{
                            logcatReader.on("entry",function(entry){
                                var log = new Log({
                                    log:
                                })
                                console.log(entry);
                            })
                        }
                    ).catch((e)=>{
                        this.logger.error("there was a bug when opening logcat, err is %j",e);
                    })
                    return null;
                }else{
                    return null;
                }
            }
        )
    }

}

export default Start;