const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route to handle /user/:id
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Get the 'id' from the URL
  res.send(`User ID is: ${userId}`);
});

// Route to handle /search?q=someTerm
app.get('/search', (req, res) => {
  const query = req.query.q; // Get the 'q' parameter from the query string
  if (query) {
    res.send(`You searched for: ${query}`);
  } else {
    res.send('No search term provided.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
