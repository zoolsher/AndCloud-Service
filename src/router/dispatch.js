import path from 'path';
class Dispatch {
    constructor(startDir) {
        this.startDir = startDir;
    }
    dispatch(router) {
        let file = path.join(this.startDir,router.route);
        let Router = require(file).default;
        let r = new Router(router);
        r.action()
        return r;
    }
}
export default Dispatch