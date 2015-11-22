var TwilioClient = require('./twilio.client');

exports.send = function (txt_number, txt_message, cb) {

  var client = TwilioClient.getClient();
  var from_number = TwilioClient.getFromNumber();

  // Send an SMS text message

  client.sendMessage({

    to: txt_number,
    from: from_number,
    body: txt_message

  }, function (err, responseData) {

    if (!err) {
      cb();
    } else {
      console.dir(err);
    }

  });
}
