import type { HigherOrderFunction } from "../functions";
import type { Cast, Narrowable, Try } from ".";
declare type RawNarrow<A> = (A extends Narrowable ? A : never) | (A extends string ? `${A}` : never) | (A extends Function ? (...args: any[]) => RawNarrow<A> & HigherOrderFunction<RawNarrow<A>> : never) | (A extends [] ? [] : never) | (A extends object ? {
    [K in keyof A]: RawNarrow<A[K]>;
} : never);
/**
 * Note: Does not handle the following cases, otherwise works for any type:
 * * `() => () => 0`
 * * `() => "test${0}"`
 */
export declare type Narrow<T extends any> = Cast<T, Try<T, [], RawNarrow<T>>>;
export {};
//# sourceMappingURL=Narrow.d.ts.map