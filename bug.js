const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Sending a generic 404 response instead of a more specific error
    res.status(404).send('User not found');
  } else {
    res.json(user);
  }
});

// ... other routes ...

// Error handling middleware should be placed after all routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});