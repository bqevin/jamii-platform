'use strict';

var _ = require('lodash');
var Command = require('./command.model');
var Channel = require('../channel/channel.model');
var Message = require('../message/message.model');

// Creates a new command in the DB.
exports.create = function (req, res) {
  var raw = req.body;
  
  // parse the text command
  var command = parseRaw(raw.Body);
  // copy the number from which text was sent
  command.from = raw.From;
  
  command.save(function (err, command) {
    if (err) { return handleError(res, err); }
    switch (command.action) {
      case "join":
        {
          Channel.join(command.from, command.parameter, function () {
            return res.status(201).json(command);
          });
          break;
        }
      case "leave":
        {
          Channel.leave(command.from, command.parameter, function () {
            return res.status(201).json(command);
          });
          break;
        }
      default:
        {
          Channel.message(command.from, command.action, command.parameter, function () {
            return res.status(201).json(command);
          });
          break;
        }
    }
  });
};

function parseRaw(raw) {
  var cs = new Command({
    raw: raw
  });

  var res = raw.split(" ");
  if (res.length > 1) {

    var cmd = res[0].toLowerCase();
    var prm = res.slice(1, res.length);
    prm = prm.join(" ");

    cs.action = cmd;
    cs.parameter = prm;
  }

  return cs;
}

function handleError(res, err) {
  return res.status(500).send(err);
}