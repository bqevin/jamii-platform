'use strict';

var express = require('express');
var controller = require('./command.controller');

var router = express.Router();

// router.get('/', controller.index);
router.post('/', controller.newCommand);
router.get('/', controller.newCommand);

module.exports = router;
