
import express from 'express';
import routes from './routes/main';

const app = express();

app.set('view engine', 'pug');
app.set('views', './app/src/views');
app.use(express.static('./public'));
app.use(express.static('./static'));
app.use(routes);

export default app;
