const express = require('express');
const app = express();
const routerApi = require('./routes/router');
const port = 3000;

app.get('/', (req, res) => {
  res.send("Bienvenido a la tienda de ropa.");
});

routerApi(app);

app.listen(port, () => {
  console.log("My port is working on " + port);
});
