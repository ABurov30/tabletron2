"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addIdentifierToLinariaPreval = addIdentifierToLinariaPreval;
exports.getOrAddLinariaPreval = getOrAddLinariaPreval;
var _createId = require("./createId");
var _scopeHelpers = require("./scopeHelpers");
function getOrAddLinariaPreval(scope) {
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
          object: (0, _createId.createId)('exports'),
          property: (0, _createId.createId)('__linariaPreval'),
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
          id: (0, _createId.createId)('__linariaPreval'),
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
function addIdentifierToLinariaPreval(scope, name) {
  const rootScope = scope.getProgramParent();
  const object = getOrAddLinariaPreval(rootScope);
  const newProperty = {
    type: 'ObjectProperty',
    key: (0, _createId.createId)(name),
    value: (0, _createId.createId)(name),
    computed: false,
    shorthand: false
  };
  const [inserted] = object.pushContainer('properties', [newProperty]);
  (0, _scopeHelpers.reference)(inserted.get('value'));
}
//# sourceMappingURL=addIdentifierToLinariaPreval.js.map