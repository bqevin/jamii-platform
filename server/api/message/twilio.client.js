exports.getClient = function () {
  var tw_ac_sid = "AC1565ae2767e04fcccd2696aeeabaf9b2";
  var tw_ac_token =  "8137cbad7ce307e6f3d8a9fe6898e5c2";
  var c = require('twilio')(tw_ac_sid, tw_ac_token);
  return c;
}

exports.getFromNumber = function () {
  return '+16476946148';
}
