import express from 'express';
import index from './pages/index';
import state from './pages/state';

const routes = express.Router();

routes.use('/', index);
routes.use('/state', state);

export default routes;
