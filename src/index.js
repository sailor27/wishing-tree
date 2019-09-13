import express from 'express';
import router from './router';

//create express server
const app = express();

app.use(router);

//set app to listen on port 3000
const server = app.listen(3000, () => {
  console.log('📠 futel app listening on port 3000')
  //send 'Hello World' to http://localhost:3000/
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/welcome', (req, res) => {
    res.send('welcome')
  });

});


//log text to console
console.log('☎ welcome to futel missed connections ☎');


export default server;