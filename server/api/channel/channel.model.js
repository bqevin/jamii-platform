'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Message = require('../message/message.model');
var Twilio = require('../message/twilio.message');

var member = {
  number: String,
  gender: String,
  age: Number
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

ChannelSchema.statics.join = function (fromNumber, channelName, cb) {
  this.find({ name: channelName }).then(function (err, channel) {
    if (channel) {
      channel.members.push({
        number: fromNumber
      });
      this.save(channel, cb);
    }
  });
}

ChannelSchema.statics.leave = function (fromNumber, channelName, cb) {
  this.find({ name: channelName }).then(function (err, channel) {
    cb();
  });
}

ChannelSchema.statics.message = function (fromNumber, channelName, message, cb) {
  this.findOne({ name: channelName }).then(function (channel) {
    if (channel) {
      for (var i = 0; i < channel.members.length; i++) {
        Twilio.send(channel.members[i].number, message, function () {
          Message.create({
            content: message,
            channel: channel.name,
            from: fromNumber
          }).then(function () {
            cb();
          })
        });
      }
    }
  });
}

module.exports = mongoose.model('Channel', ChannelSchema);
