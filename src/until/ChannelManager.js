import Channel from './Channel';
import Logger from './Logger';
//Single Instance
/**
 * (ChannelMannger)
 * 
 * @class ChannelManager
 */
class ChannelManager {
    /**
     * Creates an instance of ChannelManager.
     * 
     * 
     * @memberOf ChannelManager
     */
    constructor() {
        this._channels = [];
    }
    /**
     * @function create a new Channel
     * @param {string} name is the name of the Channel
     * @return {Channel} the new Channel with the name
     */
    create(name) {
        //TODO:Check if the id is useful;
        var id = name;
        var channel = new Channel(name, id, false);
        this._channels.push(channel);
        return channel;
    }
    /**
     * 
     * 
     * @param {string} [name="main"]
     * @returns {Channel} the channel instance withe name
     * 
     * @memberOf ChannelManager
     */
    get(name = "main") {
        name = name.toLowerCase()
        var resChannel = this._channels.find($ => {
            return $.name = name;
        });
        if (!resChannel) {
            resChannel = this.create(name);
        }
        return resChannel;
    }
    /**
     * @function shutdown and remove the channel with name
     * 
     * @param {string} name
     * 
     * @memberOf ChannelManager
     */
    remove(name){
        var channelIndex = this._channels.findIndex($=>{
            return $.name = name;
        })
        if(channelIndex==-1){
            Logger.warn("removing an unknow channel with name = %s",name);
        }else{
            channel.shutdown();
            this._channels.splice(channelIndex,1);
        }
    }
}

export default ChannelManager;