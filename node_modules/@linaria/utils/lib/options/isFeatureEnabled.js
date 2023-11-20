"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFeatureEnabled = void 0;
var _minimatch = require("minimatch");
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const cachedMatchers = new Map();
const isFeatureEnabled = (features, featureName, filename) => {
  var _features$featureName;
  const value = (_features$featureName = features === null || features === void 0 ? void 0 : features[featureName]) !== null && _features$featureName !== void 0 ? _features$featureName : false;
  if (typeof value === 'boolean') {
    return value;
  }

  // Fast check for glob patterns
  if (value === '*' || value === '**/*') {
    return true;
  }
  const array = Array.isArray(value) ? value : [value];

  /**
   * Check rule by rule like .gitignore
   */
  return array.map(pattern => {
    let matcher = cachedMatchers.get(pattern);
    if (!matcher) {
      matcher = [pattern.startsWith('!'), new _minimatch.Minimatch(pattern)];
      cachedMatchers.set(pattern, matcher);
    }
    return [matcher[0], matcher[1].match(filename)];
  }).reduce((acc, [negated, match]) => negated ? acc && match : acc || match, false);
};
exports.isFeatureEnabled = isFeatureEnabled;
//# sourceMappingURL=isFeatureEnabled.js.map