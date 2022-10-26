import type { Add } from "./Add";
import type { LessThan } from "./LessThan";
import type { Subtract } from "./Subtract";
export type MultiSub<N extends number, D extends number, Q extends number> = LessThan<N, D> extends true ? Q : MultiSub<Subtract<N, D>, D, Extract<Add<Q, 1>, number>>;
//# sourceMappingURL=MultiSub.d.ts.map