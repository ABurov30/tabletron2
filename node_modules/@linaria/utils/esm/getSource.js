import generator from '@babel/generator';
export const getSource = (path, force = false) => {
  if (path.isIdentifier()) {
    // Fast-lane for identifiers
    return path.node.name;
  }
  let source;
  try {
    source = force ? undefined : path.getSource();
    // eslint-disable-next-line no-empty
  } catch {}
  source = source || generator(path.node).code;
  return path.node.extra?.parenthesized ? `(${source})` : source;
};
//# sourceMappingURL=getSource.js.map