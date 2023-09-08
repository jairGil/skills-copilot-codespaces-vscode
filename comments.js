// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// get comments
app.get('/comments', function(req, res) {
    var comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/comments.json')));
    res.json(comments);
});
