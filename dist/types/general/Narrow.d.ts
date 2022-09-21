import type { Cast, Narrowable } from ".";
export declare type RawNarrow<A> = ((A extends Function ? A : never) | (A extends Narrowable ? A : never) | [] | {
    [K in keyof A]: RawNarrow<A[K]>;
});
/**
 * Note: Does not handle the following cases, otherwise works for any type:
 * * `() => 0`
 */
export declare type Narrow<T extends any> = ((Cast<T, RawNarrow<T> | []>) & T) | T;
//# sourceMappingURL=Narrow.d.ts.map