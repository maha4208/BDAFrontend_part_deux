const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`redirect_uri: ${process.env.REDIRECT_URI}`);
});