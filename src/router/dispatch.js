import path from 'path';
var logger = require("./../until/Logger");

class Dispatch {
    constructor(startDir) {
        this.startDir = startDir;
    }
    dispatch(router) {
        let file = path.join(this.startDir,router.route);
        try{
            let Router = require(file).default;
            let r = new Router(router);
            r.action()
            return r;
        }catch(e){
            logger.error("cannot require the file as Router there were several reasons for that.");            
        }
    }
}
export default Dispatch