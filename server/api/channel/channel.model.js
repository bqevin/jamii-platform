'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ChannelSchema = new Schema({
  name: String,
  members: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Channel', ChannelSchema);