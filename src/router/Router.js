var logger = require("./../until/Logger");
class Router{
    constructor(router){
        this.router = router;
        this.logger = logger;
    }
    action(){
        console.log("Router Action Function Get Called");
    }
}

export default Router