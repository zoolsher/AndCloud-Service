var winston = require('winston');
var path = require('path');
var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({ filename: path.join(__dirname,'..','..','andcloud-service.log') })
    ]
  });

module.exports = logger;
