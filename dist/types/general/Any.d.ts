/**
 * The purpose of this type is to capture literal arguments for generics. [`Capture`](./Capture.ts)
 */
export declare type Any = Any[] | bigint | boolean | number | string | symbol | ((...args: Any[]) => Any) | (abstract new (...args: Any[]) => Any) | {
    [key: string]: Any;
    [key: number]: Any;
    [key: symbol]: Any;
} | null | undefined;
//# sourceMappingURL=Any.d.ts.map