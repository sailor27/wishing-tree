import Router from 'express';
import welcome from './welcome';

const ivrRouter = new Router();

// POST: /ivr/welcome
ivrRouter.post('/welcome', (req, res) => {
  res.send(welcome());
});

export default ivrRouter;