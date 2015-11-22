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

MessageSchema.statics.send = function(message)
{
   
}

module.exports = mongoose.model('Message', MessageSchema);
