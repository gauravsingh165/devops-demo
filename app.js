const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
  res.send(`Running on ${os.hostname()} 🚀`);
  res.send(`Version 2 - ${os.hostname()} 🚀`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});