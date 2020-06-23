const bunyan = require('bunyan'),
        fs = require('fs')

let options = { name: "LOGGIN EXPERIMENT" };
        let logFile = (__dirname + '/logging/'); 
        

        options['streams'] = [{
                type: 'rotating-file',
                path: logFile + 'logexpriment.log',
                period: '1d', // daily rotation
                count: 30, //keep logs for a month
                
        }];


let appLogger = bunyan.createLogger(options);

module.exports = appLogger;