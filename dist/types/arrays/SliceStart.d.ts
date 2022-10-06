import type { Decrement } from "../numbers/Decrement";
export type SliceTupleStart<A extends any[], S extends number = 0> = A extends [any, ...infer R] ? 0 extends S ? A : SliceTupleStart<R, Decrement<S>> : A;
//# sourceMappingURL=SliceStart.d.ts.map