let emmit = require("emmit");

class LifeCycle{
    constructor(){
        this.regiseters = [];
    }
    register(phone){
        this.regiseters.push(phone);
    }
    dispatch(event){
        this.regiseters.map((phone)=>{
            if(phone.alive){
                phone.kill();
            }
        })
    }
}