const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from Mirza_Ahmed Jenkins Pipeline!');
}).listen(3000);

console.log('Server Running');
