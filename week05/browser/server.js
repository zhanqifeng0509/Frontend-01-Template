const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request received:' + new Date());
  console.log(req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hi,chunked return radix 16!!!');
});

server.listen(8088);
