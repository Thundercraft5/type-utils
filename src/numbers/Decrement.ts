import type { BuildTuple } from "../arrays";

export type Decrement<N extends number = 0> = BuildTuple<N> extends [any, ...infer R] ? R["length"] : 0;