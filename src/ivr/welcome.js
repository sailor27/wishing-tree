import twilio from 'twilio';


function welcome() {
  console.log("welcome initiated");

  const { VoiceResponse } = twilio.twiml;
  const voiceResponse = new VoiceResponse();

  const gather = voiceResponse.gather({
    action: '/ivr/menu',
    numDigits: '1',
    method: 'POST',
  });

  gather.say(
    'Thank you for calling Futel. ' +
    'Press 1 to listen to Missed Connections. ',
    { loop: 3 }
  );

  return voiceResponse.toString();

}

export default welcome;
