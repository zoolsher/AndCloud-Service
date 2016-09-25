var logger = require("./../until/Logger");

class Controller{
    constructor(router){
        this.router = router;
        this.logger = logger;
    }
    action(){
        logger.info("Router Action Function Get Called");
    }
}

export default Controller;