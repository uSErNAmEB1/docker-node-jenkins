const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node App');
});

app.listen(4000, () => {
  console.log('App is running on port 4000');
});
