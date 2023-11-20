export declare function buildSlug<TArgs extends Record<string, {
    toString(): string;
}>>(pattern: string, args: TArgs): string;
