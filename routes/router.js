const examenR = require('./examen');
const workers = require('./workers');
const clothes = require('./clothes');

function routerApi(app) {
  app.use('/examen', examenR),
  app.use('/workers', workers),
  app.use('/clothes', clothes)
}

module.exports = routerApi;
