const express = require('express');
const router = express();
const dataCloth = require('./data');

const array = dataCloth.clothes;

router.get('/', (req, res) => {
  //res.send("Soy el endpoint de la ropa.");
  res.json(array);
});

module.exports = router;
