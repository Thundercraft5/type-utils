import type { BuildTuple, TupleLength } from "../arrays";
export type Subtract<A extends number, B extends number> = BuildTuple<A> extends [...(infer U), ...BuildTuple<B>] ? TupleLength<U> : never;
//# sourceMappingURL=Subtract.d.ts.map