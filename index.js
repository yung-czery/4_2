'use strict';

const express = require('express');
const data = require('./data.json');
const app = express();

app.get('/jokebook/categories', (req, res) => res.send(data.categories));

app.get('/jokebook/joke/:category', (req, res) => {
  const { category } = req.params;

  if (!data.categories.includes(category)) {
    return res.status(400).json({ error: `No jokes for category ${category}` });
  }

  const joke = data[category][Math.floor(Math.random() * data[category].length)];
  res.send(joke);
});

app.listen(3000, () => console.log('Server started on port 3000'));