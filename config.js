var configData = {
    "MessageQueen":{
        "connection":"tcp://127.0.0.1:8765"
    },
    "db":{
		"IP":"127.0.0.1",
		"PORT":"27071",
		"session_url":"mongodb://localhost:27017/ANDCLOUD_SESSION",
		"db_url":"mongodb://localhost:27017/ANDCLOUD"
	}
}
global.app = {}
global.app.configData = configData;
module.exports = configData;