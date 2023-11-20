import { Minimatch } from 'minimatch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const cachedMatchers = new Map();
export const isFeatureEnabled = (features, featureName, filename) => {
  const value = features?.[featureName] ?? false;
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
      matcher = [pattern.startsWith('!'), new Minimatch(pattern)];
      cachedMatchers.set(pattern, matcher);
    }
    return [matcher[0], matcher[1].match(filename)];
  }).reduce((acc, [negated, match]) => negated ? acc && match : acc || match, false);
};
//# sourceMappingURL=isFeatureEnabled.js.map