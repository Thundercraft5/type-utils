import type { OptionalPropertyNames } from "./OptionalPropertyNames";
type SpreadProperties<L, R, K extends keyof L & keyof R> = {
    [P in K]: Exclude<R[P], undefined> | L[P];
};
type Id<T> = T extends infer U ? {
    [K in keyof U]: U[K];
} : never;
type Spread$1<L, R> = Id<Pick<L, Exclude<keyof L, keyof R>> & Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>> & Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>> & SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>>;
export type Spread<A extends readonly [...any]> = A extends [infer L, ...infer R] ? Spread$1<L, Spread<R>> : unknown;
export {};
//# sourceMappingURL=Spread.d.ts.map