const express = require('express');
const router = express();
const datas = require('./data');

const empleados = datas.workers;
const ropas = datas.clothes;

router.get('/', (req, res) => {
  let texto = [];

  for (let i = 0; i < 10; i++) {
    texto.push("Hello my name is " + empleados[i].name + " " + empleados[i].lastname + " and I'm so happy to be here!");
  }

  res.send(texto);
});

module.exports = router;
