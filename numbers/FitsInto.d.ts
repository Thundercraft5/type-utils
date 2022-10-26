import type { LessThan } from "./LessThan";
import type { Subtract } from "./Subtract";
export type FitsInto<N extends number, I extends number> = LessThan<N, I> extends true ? [] : [any, ...FitsInto<Subtract<N, I>, I>];
//# sourceMappingURL=FitsInto.d.ts.map