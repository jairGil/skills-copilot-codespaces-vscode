// Create web server
// Run: node comments.js
// Note: install node.js first

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    var name = query.name;
    var comment = query.comment;
    var new_comment = name + ": " + comment + "\n";

    console.log("Path: " + path);
    console.log("Name: " + name);
    console.log("Comment: " + comment);
    console.log("New Comment: " + new_comment);

    if (path == "/") {
        // Read comments.txt
        fs.readFile('comments.txt', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
    else if (path == "/add_comment") {
        // Append new comment to comments.txt
        fs.appendFile('comments.txt', new_comment, function(err) {
            if (err) throw err;
            console.log('New comment appended to comments.txt');
        });
        // Redirect to root page
        response.writeHead(302, {'Location': '/'});
        response.end();
    }
    else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(8000);
