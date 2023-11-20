import type { NodePath } from '@babel/core';
import type { CallExpression } from '@babel/types';
export declare function isUnnecessaryReactCall(path: NodePath<CallExpression>): boolean;
