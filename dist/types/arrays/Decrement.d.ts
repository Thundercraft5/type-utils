import { BuildTuple } from "./BuildTuple";
export type Decrement<N extends number = 0> = BuildTuple<N> extends [any, ...infer R] ? R["length"] : 0;
//# sourceMappingURL=Decrement.d.ts.map