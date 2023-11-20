"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMeta = hasMeta;
function hasMeta(value) {
  return typeof value === 'object' && value !== null && '__linaria' in value;
}
//# sourceMappingURL=hasMeta.js.map