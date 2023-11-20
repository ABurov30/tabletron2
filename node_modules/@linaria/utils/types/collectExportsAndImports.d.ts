import type { NodePath } from '@babel/traverse';
import type { Identifier, MemberExpression, Program } from '@babel/types';
export interface ISideEffectImport {
    imported: 'side-effect';
    local: NodePath;
    source: string;
}
export interface IImport {
    imported: string | 'default' | '*';
    local: NodePath<Identifier | MemberExpression>;
    source: string;
    type: 'cjs' | 'dynamic' | 'esm';
}
export type Exports = Record<string | 'default' | '*', NodePath>;
export interface IReexport {
    exported: string | 'default' | '*';
    imported: string | 'default' | '*';
    local: NodePath;
    source: string;
}
export interface IState {
    deadExports: string[];
    exportRefs: Map<string, NodePath<MemberExpression>[]>;
    exports: Exports;
    imports: (IImport | ISideEffectImport)[];
    isEsModule: boolean;
    reexports: IReexport[];
}
export declare const sideEffectImport: (item: IImport | ISideEffectImport) => item is ISideEffectImport;
export declare const explicitImport: (item: IImport | ISideEffectImport) => item is IImport;
export declare function collectExportsAndImports(path: NodePath<Program>, cacheMode?: 'disabled' | 'force' | 'enabled'): IState;
