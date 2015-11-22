'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MessageSchema = new Schema({
  content: String,
  channel: String,
  from: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

MessageSchema.statics.findByChannel = function (channelname, callback) {
  console.log("Finding messages for channel: " + channelname);
  this.find({ channel: channelname }, function(err, res) {
    callback(res);
  });
}

module.exports = mongoose.model('Message', MessageSchema);
