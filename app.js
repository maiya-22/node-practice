const http = require("http");
const server = http.createServer(function(req, res) {
  const body = "you have reached the server";
  const content_length = body.length;
  res.writeHead(200, {
    "Content-Length": content_length,
    "Content-Type": "text/plain"
  });
  res.end(body);
});

server.listen(8080);
