import Router from 'express';
import twilio from 'twilio';
import ivrRouter from './ivr/router'

const router = new Router();

//Home page
router.get('/', (req, res) => {
  res.send('index');
});

router.use('/ivr', twilio.webhook({ validate: false }), ivrRouter);


export default router;