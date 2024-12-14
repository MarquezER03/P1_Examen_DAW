const express = require('express');
const router = express();
const dataWorker = require('./data');

const array = dataWorker.workers;

router.get('/', (req, res) => {
  res.json(array);
});

module.exports = router;
