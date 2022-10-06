import type { BuildTuple } from "./BuildTuple";
export type Increment<N extends number = 0> = [N, ...BuildTuple<N>]["length"];
//# sourceMappingURL=Increment.d.ts.map