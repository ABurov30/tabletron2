import type { BuildCodeFrameErrorFn } from '@linaria/utils';
declare function throwIfInvalid<T>(checker: (value: unknown) => value is T, value: Error | unknown, ex: {
    buildCodeFrameError: BuildCodeFrameErrorFn;
}, source: string): asserts value is T;
export default throwIfInvalid;
