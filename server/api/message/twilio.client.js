exports.getClient = function () {
  var tw_ac_sid = "ACe53127d4e2eaec37299e0efd59b49c06";
  var tw_ac_token = "eb5e9dbccc78b760ff119db14382b4b1";
  var c = require('twilio')(tw_ac_sid, tw_ac_token);
  return c;
}

exports.getFromNumber = function () {
  return '+19022001468';
}
