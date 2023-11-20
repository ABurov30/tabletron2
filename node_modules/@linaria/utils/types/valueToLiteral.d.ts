import type { NodePath } from '@babel/traverse';
import type { Expression } from '@babel/types';
export declare function valueToLiteral(value: unknown, ex: NodePath): Expression;
