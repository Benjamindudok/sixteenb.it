var express = require('express');
var logger = require('morgan');
var path = require('path');
var history = require('connect-history-api-fallback');
var app = express();

// log requests
app.use(logger('dev'));

app.use(express.static());
app.use('/', express.static(__dirname + '/'));

app.use(history());

app.listen(3001, function() {
    console.log('listening on port 3000');
});