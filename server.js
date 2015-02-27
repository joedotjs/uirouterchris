var path = require('path');
var express = require('express');

var server = require('http').createServer();
var app = express();

app.use(express.static('./node_modules'));
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

server.on('request', app);
server.listen(8081);