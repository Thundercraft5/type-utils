import type { BuildTuple } from "../arrays";

export type Increment<N extends number = 0> = [any, ...BuildTuple<N>]["length"];