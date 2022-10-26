var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);


function handleServer(req, res) {
  res.writeHead(200, 'Welcome to Dominos!');
  res.end();
}

module.exports = httpServer;