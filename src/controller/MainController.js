import { CREATED_A_NEW_PROJECT, CHANNEL_SHUT_DOWN } from './../actionnames';
import Controller from './../until/Controller';
import { Project } from './../model';
import aapt from 'aapt';

class MainController extends Controller {
    constructor() {
        super()
        this.init()
    }
    init() {
        var channelManager = global.app.ChannelManager.getInstance();
        var mainChannel = channelManager.get("main");
        mainChannel.pulling(CREATED_A_NEW_PROJECT, this.createdANewProject)
        mainChannel.pulling(CHANNEL_SHUT_DOWN, this.mainChannelShutDown);
        var phoneChannel = channelManager.get("phone");
    }
    createdANewProject(params) {
        var id = params.id;
        Project.findOne({ "_id": id })
            .then((result) => {
                var project = result;
                if (project && project.apk && project.apk.path) {
                    var apkfilepath = project.apk.path;
                    var apk = project.apk;
                    (new aapt()).analize(apkfilepath)
                        .then((result) => {
                            apk.detail = result;
                            if (result.package) {
                                apk.version = result.package.versionName + "(" + result.package.versionCode + ")";
                            }
                            return Project.findOneAndUpdate({ "_id": id }, {
                                $set: {
                                    apk: apk
                                }
                            })
                        }).error((err) => {
                            global.app.Logger.error("errer happens in the mainController with the aapt when analizing %s and id is %s, err is %j", apkfilepath, id, err);
                        });
                }
                return null;
            })
            .error((err) => {
                global.app.Logger.error("error happens in the mainController with Mongoose id is %s", id);
            })

    }
    mainChannelShutDown(params) {

    }
}
const controller = new MainController();
export default controller;