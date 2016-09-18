let adb = require("adbkit");
let client = adb.createClient(); 
let Phone = require("./phone");

class DeviceTrackerWrapper{
    constructor(callback){
        this.phones = [];
        client.trackDivces()
        .then((tracker)=>{
            tracker.on("remove",device => {
                this.remove(device)
            });
            tracker.on("add",device => {
                this.add(device)
            });
            tracker.on("end",device => {
                this.end()
            });
            this.tracker = tracker;
            callback(tracker);
        })
        .catch(err => {
            console.log(err.stack)
        })
    }
    add(device){
        this.phones.push(Phone(device))
    }
    remove(device){
        var index = -1;
        var phones = this.phones;
        while(index++<phones.length){
            var deviceTmp = phones[index]
            if (deviceTmp.id == device.id){
                break
            }else{
                continue
            }
        }
        this.phones.splice(index,1);
        return index;
    }
    end(){
        var index = -1;
        while(index++ < this.phones.length){
            var phone = this.phones[index]
            phone.kill();
        }
    }
}