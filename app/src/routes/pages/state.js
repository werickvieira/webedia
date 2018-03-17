import express from 'express';

const state = express.Router();

state.get('/:name', (req, res) => {
  res.send('STATE!!');
});

export default state;
