const fs = require('fs');
const proxy = require('http-proxy');

const proxyPort = 8899;

proxy.createServer({
  target: {
    host: 'localhost',
    port: 3311
  },
  ssl: {
    key: fs.readFileSync(process.env['HOME'] + '/.ssh/domain.key', 'utf8'),
    cert: fs.readFileSync(process.env['HOME'] + '/.ssh/domain.crt', 'utf8')
  }
}).listen(proxyPort);

console.log('Proxy to http://localhost:3311 is listening on port', proxyPort);
