import type { FeatureFlag } from './types';
type NoInfer<T> = [T][T extends any ? 0 : never];
export declare const isFeatureEnabled: <T extends string>(features: { [K in T]?: FeatureFlag | undefined; } | undefined, featureName: NoInfer<T>, filename: string) => boolean;
export {};
