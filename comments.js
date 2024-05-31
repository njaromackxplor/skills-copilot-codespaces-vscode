// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add some middleware to express
app.use(express.json());

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// Create a route to get a specific comment
app.get('/comments/:id', (req, res) => {
  res.send(`Get comment with id ${req.params.id}`);
});

// Create a route to create a new comment
app.post('/comments', (req, res) => {
  res.send(`Create new comment: ${req.body}`);
});

// Create a route to update a comment
app.put('/comments/:id', (req, res) => {
  res.send(`Update comment with id ${req.params.id}: ${req.body}`);
});

// Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send(`Delete comment with id ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});