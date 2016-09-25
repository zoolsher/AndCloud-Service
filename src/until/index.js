import fs from 'fs';
import path from 'path';
import Logger from './Logger';

let files = [];
let disAllowList = ['index.js'];
var moduleToExport = {};

try {
    files = fs.readdirSync(__dirname);
} catch (error) {
    Logger.error("there is an error %j", error);
}

files.filter(($)=>{
    return disAllowList.indexOf($)<0;
}).forEach($=>{
    var moduleName = $.substring(0,$.lastIndexOf('.'));
    moduleToExport[moduleName] = require(path.join(__dirname,$));
});

export let module = moduleToExport;