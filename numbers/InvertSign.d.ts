import type { ForbidWideValue, Widen } from "../general";
import type { IsNegative } from "./IsNegative";
import type { Numeric } from "./Numeric";
export type InvertSign<N extends Numeric> = ForbidWideValue<N> extends N ? IsNegative<N> extends true ? `${N}` extends `-${infer S extends Widen<N> & bigint}` ? S : `${N}` extends `-${infer S extends Widen<N> & number}` ? S : N : `-${N}` extends `${infer S extends Widen<N> & bigint}` ? S : `-${N}` extends `${infer S extends Widen<N> & number}` ? S : N : N;
//# sourceMappingURL=InvertSign.d.ts.map