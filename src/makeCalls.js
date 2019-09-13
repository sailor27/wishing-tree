import twilio from 'twilio';
import 'dotenv/config';


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
}).catch((err) => console.log(err));


export default makeCalls;