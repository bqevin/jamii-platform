'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommandSchema = new Schema({
  action: String,
  parameter: String,
  raw: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Command', CommandSchema);