import express from 'express';
import country from './country';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.use('/country', country);

export default routes;
