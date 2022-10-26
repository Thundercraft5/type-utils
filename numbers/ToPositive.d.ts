import type { Widen } from "../general";
import type { IsNegative } from "./IsNegative";
import type { Numeric } from "./Numeric";
export type ToPositive<N extends Numeric> = IsNegative<N> extends true ? `${N}` extends `-${infer S extends Widen<N> & bigint}` ? S : `${N}` extends `-${infer S extends Widen<N> & number}` ? S : N : never;
//# sourceMappingURL=ToPositive.d.ts.map