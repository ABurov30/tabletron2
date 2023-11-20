"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPackageJSON = findPackageJSON;
var _path = require("path");
var _findUp = _interopRequireDefault(require("find-up"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cache = new Map();
function findPackageJSON(pkgName, filename) {
  try {
    const pkgPath = pkgName === '.' && filename && (0, _path.isAbsolute)(filename) ? filename : require.resolve(pkgName, filename ? {
      paths: [(0, _path.dirname)(filename)]
    } : {});
    if (!cache.has(pkgPath)) {
      cache.set(pkgPath, _findUp.default.sync('package.json', {
        cwd: pkgPath
      }));
    }
    return cache.get(pkgPath);
  } catch (er) {
    if (typeof er === 'object' && er !== null && er.code === 'MODULE_NOT_FOUND') {
      return undefined;
    }
    throw er;
  }
}
//# sourceMappingURL=findPackageJSON.js.map