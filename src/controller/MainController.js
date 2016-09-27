import {CREATED_A_NEW_PROJECT,CHANNEL_SHUT_DOWN} from './../actionnames';
import Controller from './../until/Controller';
class MainController extends Controller{
    constructor(){
        super()
        this.init()
    }
    init(){
        var channelManager = global.app.ChannelManager.getInstance();
        var mainChannel = channelManager.get("main");
        mainChannel.pulling(CREATED_A_NEW_PROJECT,this.createdANewProject)
        mainChannel.pulling(CHANNEL_SHUT_DOWN,this.mainChannelShutDown);
        var phoneChannel = channelManager.get("phone");
    }
    createdANewProject(params){
        var id = params.id;
        console.log(id);
    }
    mainChannelShutDown(params){
        
    }
}
const controller = new MainController();
export default controller;