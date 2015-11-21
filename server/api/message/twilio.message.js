var TwilioClient = require('./twilio.client');

exports.send = function (txt_number, txt_message) {

  var client = TwilioClient.getClient();
  var fromnumber = TwilioClient.getFromNumber();

  // Send an SMS text message

  client.sendMessage({

      to: txt_number,
      from: fromnumber,
      body: txt_message

  }, function(err, responseData) {

      if (!err) { // "err" is an error received during the request, if any
          console.log(responseData.from); // outputs "+14506667788"
          console.log(responseData.body); // outputs "word to your mother."
      }
  });
}
