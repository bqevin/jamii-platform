'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

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

module.exports = mongoose.model('Channel', ChannelSchema);