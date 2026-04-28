const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from JFrog DevOps flow-v3");
}).listen(3000);