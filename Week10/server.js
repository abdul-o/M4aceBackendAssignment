const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to My Server!');
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
