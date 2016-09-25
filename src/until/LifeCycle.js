import EventEmitter from 'events';

class LifeCycle extends EventEmitter{
    constructor(){
        super();
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

export default LifeCycle;