'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var twilio = require('../message/twilio.message');

var member = {
  number: String
};

var ChannelSchema = new Schema({
  name: String,
  members: [member],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

ChannelSchema.pre('save', function (next) {
  this.name = this.name.toLowerCase();
  next();
});

ChannelSchema.statics.join = function (number, channelName, cb) {
  this.find({ name: channelName }).then(function (err, channel) {
    if (channel) {
      channel.members.push({
        number: number
      });
      this.save(channel, cb);
    }
  });
}

ChannelSchema.statics.leave = function (number, channelName, cb) {
  this.find({ name: channelName }).then(function (err, channel) {
  });
}

ChannelSchema.statics.message = function (number, channelName, message, cb) {
  this.findOne({ name: channelName }).then(function (channel) {
    if (channel) {
      for (var i = 0; i < channel.members.length; i++) {
        twilio.send(number, message, function () {
          console.log("message sent");
        });
      }
    }
  });
}

module.exports = mongoose.model('Channel', ChannelSchema);