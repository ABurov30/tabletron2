import { dirname, isAbsolute } from 'path';
import findUp from 'find-up';
const cache = new Map();
export function findPackageJSON(pkgName, filename) {
  try {
    const pkgPath = pkgName === '.' && filename && isAbsolute(filename) ? filename : require.resolve(pkgName, filename ? {
      paths: [dirname(filename)]
    } : {});
    if (!cache.has(pkgPath)) {
      cache.set(pkgPath, findUp.sync('package.json', {
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