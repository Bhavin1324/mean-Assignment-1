const WebSocket = require('ws') // npm i ws --save
var http = require('http');
var fs = require('fs');
const reply = require('./bot');
const port = process.env.PORT || 5000;
var httpserver = http.createServer(function (request, response) {
    if (request.url == "/") {
        fs.readFile("./q-4/index.html", (err, data) => {
            response.write(data)
            response.end();
        })
    }
}).listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});
const wss = new WebSocket.Server({ server: httpserver })
wss.on("connection", (clientws) => {
    clientws.send("Hello Human")
    clientws.on("message", (msg) => {
        let r = reply(msg.toString())
        clientws.send(r);
    })
})