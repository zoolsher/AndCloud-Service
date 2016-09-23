var logger = require("./../until/Logger");
//TODO: adding DB;
var db = require("db");
class Controller{
    constructor(router){
        this.router = router;
        this.logger = logger;
        this.db = db;
    }
    action(){
        logger.info("Router Action Function Get Called");
    }
}

export default Controller;