import express from 'express';
import country from './country';
import search from './search';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.use('/api', country);
routes.use('/api/search', search);

export default routes;

