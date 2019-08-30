import 'dotenv/config';
import express from 'express';
import twilio from 'twilio';

//create express server
const app = express();

//set app to listen on port 3000
app.listen(3000, () => {
  console.log('📠 futel app listening on port 3000')
})

// host static xml files
app.use(express.static('src/audio'));

//log text to console
console.log('☎ welcome to futel missed connections ☎');

//send 'Hello World' to http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req)
});

//intialize twilio with auth tokens
const { ACCOUNT_SID, AUTH_TOKEN, MY_PHONE_NUMBER, TWILIO_PHONE_NUMBER } = process.env;
const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const options = {
  url: 'http://1cc71833.ngrok.io/',
  to: MY_PHONE_NUMBER,
  from: TWILIO_PHONE_NUMBER
}

// place call to my phone number using twilio
client.calls.create(options, (err, call) => {
  console.log(`Now calling: ${call.to}`);
  console.log(`Call ID: ${call.sid}`);

}).then((call) => {
  const { VoiceResponse } = twilio.twiml;
  const response = new VoiceResponse();
  response.say('welcome to futel');
  console.log(response.toString());
// console.log(response.toString());
  // call.sid && client.calls(call.sid)
  //   .update({ status: 'completed' })
  //   .then(call => console.log(call));
}).catch((err) => console.log(err))
// response.say('welcome to futel');
// const { VoiceResponse } = twilio.twiml;
// const response = new VoiceResponse();
// response.hangup();
// console.log(response.toString());
