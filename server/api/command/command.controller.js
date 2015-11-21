/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/commands              ->  index
 */

'use strict';

// Gets a list of Commands
exports.index = function(req, res) {
  res.json([]);
};
