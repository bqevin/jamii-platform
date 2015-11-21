'use strict';

var _ = require('lodash');
var Command = require('./command.model');

// Creates a new command in the DB.
exports.create = function (req, res) {
  var command = parseRaw(req.body.raw);
  command.save(function (err, command) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(command);
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