// status-server.js
const http = require('http');

const PORT = process.env.STATUS_PORT ? Number(process.env.STATUS_PORT) : 3000;

const server = http.createServer((req, res) => {
  // Only respond to GET /status exactly
  if (req.method === 'GET' && req.url === '/status') {
    const payload = {
      status: 'ok',
      uptime: Math.round(process.uptime()), // seconds
      time: new Date().toISOString()
    };
    const body = JSON.stringify(payload);
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    });
    return res.end(body);
  }

  // anything else -> 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});



server.listen(PORT, () => {
  console.log(`Status server listening on http://localhost:${PORT}`);
});
