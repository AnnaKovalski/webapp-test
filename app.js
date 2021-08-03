const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Это кол бек дял app.get("/")');
  console.log(req.url);
  res.send({ name: 'mango' });
});

app.get('/about', (req, res) => {
  console.log("Это кол бек для app.get('/about')");
  console.log(req.url);
});

app.listen(4444, () => {
  console.log(`Application server is running on port ${4444}`);
});
