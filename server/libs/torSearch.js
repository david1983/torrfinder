var torRequest = require("torrequest");
var config = require('config');
var restartT = require('./restart_tor');

function torSearch(url){
    torRequest({
    uri: url,
    torHost: config.tor.host,
    torPort: config.tor.port
    }, function(err,res,doc){
    if(err) return console.log("Error: "+err);
        var regexp = /<title>+(.*)+<\/title>/;
        var m = doc.match(regexp);
        console.log(m[1])  
        if(/CloudFlare/.test(m[1])){
            console.log('cloudflare')
            restartT()
            setTimeout(()=>{
                console.log('another')
                torSearch(url)
            },4000)
        }else{
            console.log(doc)
        }
    
    console.log("Document fetched successfully...");
    });

}

module.exports = torSearch;