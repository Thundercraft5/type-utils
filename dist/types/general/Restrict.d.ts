import { Literal } from "./Literal";
import type { Narrowable } from "./Narrowable";
import type { Widen } from "./Widen";
/** Helper type to normalize values when comparing bounds and given type */
type NormalizeComparison<T, B> = {
    [K in keyof B]: Literal<B[K]> extends B[K] ? B[K] : B[K] extends object ? NormalizeComparison<T[K & keyof T], B[K]> : Widen<T[K & keyof T]>;
};
export type Restrict<T extends any, Bounds extends unknown> = T extends Bounds ? T extends Function | Narrowable ? T : T extends object ? Bounds extends NormalizeComparison<T, Bounds> ? T : Bounds : T : Bounds;
export type RestrictNarrow<T extends any, Bounds extends unknown> = T extends Bounds ? T extends Function | Narrowable ? T : T extends object ? Bounds extends NormalizeComparison<T, Bounds> ? T : never : T : never;
export {};
//# sourceMappingURL=Restrict.d.ts.map