var http = require("http");
fs = require('fs');
const PORT = process.env.PORT || 8080;

http.createServer(function(req, res) {
    //Send the HTTP header
    //HTTP Status: 200: OK
    //Content Type: text/plain
    //res.writeHead(200, {
    //"Content-Type": "text/html",
    //"Access-Control-Allow-Origin": "*"
    //});

    //Test
    fs.readFile("/pages/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });

    fs.readFile("/pages/about.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });

    //var readStream = fs.createReadStream(__dirname + 'index.html');
    //send a message
    //readStream.pipe(res);
}).listen(PORT);

//Console will print the message
console.log("Server running at http://127.0.0.1:8080");