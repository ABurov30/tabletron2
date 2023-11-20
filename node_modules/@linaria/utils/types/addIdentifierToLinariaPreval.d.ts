import type { NodePath, Scope } from '@babel/traverse';
import type { ObjectExpression } from '@babel/types';
export declare function getOrAddLinariaPreval(scope: Scope): NodePath<ObjectExpression>;
export declare function addIdentifierToLinariaPreval(scope: Scope, name: string): void;
