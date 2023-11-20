"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BaseProcessor: true,
  buildSlug: true,
  isValidParams: true,
  validateParams: true,
  TaggedTemplateProcessor: true,
  toValidCSSIdentifier: true
};
Object.defineProperty(exports, "BaseProcessor", {
  enumerable: true,
  get: function () {
    return _BaseProcessor.BaseProcessor;
  }
});
Object.defineProperty(exports, "TaggedTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _TaggedTemplateProcessor.default;
  }
});
Object.defineProperty(exports, "buildSlug", {
  enumerable: true,
  get: function () {
    return _buildSlug.buildSlug;
  }
});
Object.defineProperty(exports, "isValidParams", {
  enumerable: true,
  get: function () {
    return _validateParams.isValidParams;
  }
});
Object.defineProperty(exports, "toValidCSSIdentifier", {
  enumerable: true,
  get: function () {
    return _toValidCSSIdentifier.default;
  }
});
Object.defineProperty(exports, "validateParams", {
  enumerable: true,
  get: function () {
    return _validateParams.validateParams;
  }
});
var _BaseProcessor = require("./BaseProcessor");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _buildSlug = require("./utils/buildSlug");
var _validateParams = require("./utils/validateParams");
var _TaggedTemplateProcessor = _interopRequireDefault(require("./TaggedTemplateProcessor"));
var _toValidCSSIdentifier = _interopRequireDefault(require("./utils/toValidCSSIdentifier"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map