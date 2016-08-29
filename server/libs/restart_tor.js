var exec = require('child_process').exec;
var config = require('config');

function restartT(){
exec(config.app.restartScript, function( error, stdout, stderr) 
   {
       if ( error != null ) {
            console.log(stderr);        
       }       
   });
}

module.exports = restartT;