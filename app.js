var torSearch = require('./server/libs/torSearch')

torSearch('http://thepiratebay.org')


var express = require('express');
var app = express();
var config = require('config');

app.use(express.static('client'));

app.listen(config.app.port,function(){
    console.log('listening: ' + config.app.port)
})