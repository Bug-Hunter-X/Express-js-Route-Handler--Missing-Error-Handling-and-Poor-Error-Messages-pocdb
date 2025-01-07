const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Input validation: Check if userId is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
});

// ... other routes ...

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});