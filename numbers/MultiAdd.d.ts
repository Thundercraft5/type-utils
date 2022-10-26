import type { Add } from "./Add";
import type { Subtract } from "./Subtract";
export type MultiAdd<N extends number, A extends number, I extends number> = I extends 0 ? A : MultiAdd<N, Extract<Add<N, A>, number>, Subtract<I, 1>>;
//# sourceMappingURL=MultiAdd.d.ts.map