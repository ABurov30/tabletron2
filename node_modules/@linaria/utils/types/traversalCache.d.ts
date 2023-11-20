import type { NodePath } from '@babel/traverse';
import type { Node } from '@babel/types';
export declare const getTraversalCache: <TValue, TKey extends Node | NodePath<Node> = NodePath<Node>>(path: NodePath, name: string) => WeakMap<TKey, TValue>;
export declare const clearBabelTraversalCache: () => void;
export declare const invalidateTraversalCache: (path: NodePath) => void;
