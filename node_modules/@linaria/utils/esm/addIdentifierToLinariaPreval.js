import { createId } from './createId';
import { reference } from './scopeHelpers';
export function getOrAddLinariaPreval(scope) {
  const rootScope = scope.getProgramParent();
  const programPath = rootScope.path;
  let object = programPath.getData('__linariaPreval');
  if (object) {
    return object;
  }
  if (programPath.node.sourceType === 'script') {
    // CJS exports.__linariaPreval = {};
    const prevalExport = {
      expression: {
        type: 'AssignmentExpression',
        operator: '=',
        left: {
          computed: false,
          object: createId('exports'),
          property: createId('__linariaPreval'),
          type: 'MemberExpression'
        },
        right: {
          properties: [],
          type: 'ObjectExpression'
        }
      },
      type: 'ExpressionStatement'
    };
    const [inserted] = programPath.pushContainer('body', [prevalExport]);
    object = inserted.get('expression.right');
  } else {
    // ESM export const __linariaPreval = {};
    const prevalExport = {
      declaration: {
        declarations: [{
          id: createId('__linariaPreval'),
          init: {
            properties: [],
            type: 'ObjectExpression'
          },
          type: 'VariableDeclarator'
        }],
        kind: 'const',
        type: 'VariableDeclaration'
      },
      specifiers: [],
      type: 'ExportNamedDeclaration'
    };
    const [inserted] = programPath.pushContainer('body', [prevalExport]);
    object = inserted.get('declaration.declarations.0.init');
  }
  programPath.setData('__linariaPreval', object);
  return object;
}
export function addIdentifierToLinariaPreval(scope, name) {
  const rootScope = scope.getProgramParent();
  const object = getOrAddLinariaPreval(rootScope);
  const newProperty = {
    type: 'ObjectProperty',
    key: createId(name),
    value: createId(name),
    computed: false,
    shorthand: false
  };
  const [inserted] = object.pushContainer('properties', [newProperty]);
  reference(inserted.get('value'));
}
//# sourceMappingURL=addIdentifierToLinariaPreval.js.map