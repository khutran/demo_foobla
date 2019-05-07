"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basename = _path2.default.basename(__filename);
var Models = {};

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
}).forEach(function (file) {
  var model = require(_path2.default.join(__dirname, file)).default;
  Models[model.name] = model;
});

(0, _keys2.default)(Models).forEach(function (modelName) {
  if (Models[modelName].associate) {
    Models[modelName].associate(Models);
  }
});

exports.default = Models;