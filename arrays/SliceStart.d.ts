import type { Decrement } from "../numbers";
export type SliceStart<A extends any[], S extends number = 0> = A extends [any, ...infer R] ? 0 extends S ? A : SliceStart<R, Decrement<S>> : A;
//# sourceMappingURL=SliceStart.d.ts.map