const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to My Server!');


  if (req.url === '/') {
    res.end('Welcome to My Server!');
  } else if (req.url === '/about') {
    res.end('This is the About page.');
  } else if (req.url === '/contact') {
    res.end('Contact us at: contact@example.com');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});





// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
