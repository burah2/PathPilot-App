const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let userPoints = {}; // Store user points in memory

app.post('/earnPoints', (req, res) => {
  const { userId, points } = req.body;
  userPoints[userId] = (userPoints[userId] || 0) + points;
  res.json({ success: true, message: 'Points earned successfully' });
});

app.get('/getPoints/:userId', (req, res) => {
  const { userId } = req.params;
  const points = userPoints[userId] || 0;
  res.json({ points });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
