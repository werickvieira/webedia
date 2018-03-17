import express from 'express';

const index = express.Router();

index.get('/', (req, res) => {
  res.send('INDEX !!!');
});

export default index;
