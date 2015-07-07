'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PidSchema = new Schema(
  {
    pid: Number,
    network: String,
  });

module.exports = mongoose.model('Pid', PidSchema);