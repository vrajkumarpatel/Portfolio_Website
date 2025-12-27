
const http = require('http');

const hostname = '127.0.0.1';
const port = 3005;

console.log("Starting server...");

try {
  const server = http.createServer((req, res) => {
    console.log("Request received");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  server.on('error', (e) => {
    console.error('Server error:', e);
  });
  
  // Keep process alive explicitly? (Should not be needed)
  setInterval(() => {
    // console.log('Heartbeat');
  }, 10000);

} catch (e) {
  console.error("Exception:", e);
}
