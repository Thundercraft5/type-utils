import type { Cast, Narrowable } from ".";
import type { RawNarrowBase } from "./Narrow";
/**
 * Narrows generic arguments to their literal types, in a similar fashion to {@linkcode Narrow}, but for arrays
 */
export type NarrowRest<T> = Cast<T, (T extends Narrowable ? T : never) | [] | {
    [K in keyof T]: RawNarrowBase<T[K]>;
}>;
//# sourceMappingURL=NarrowRest.d.ts.map