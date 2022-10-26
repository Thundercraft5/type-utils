import type { EqualsExact } from "../general";
import type { ToNumber } from "../numbers";
import type { FilterElements } from "./FilterElements";
/**
 * @internal Used only for {@linkcode LastIndexOf} and {@linkcode FirstIndexOf}.
 */
export type InternalIndexOfExact<A extends any[], E> = FilterElements<{
    [K in keyof A]: EqualsExact<A[K], E> extends true ? ToNumber<K & string> : never;
}, never>;
//# sourceMappingURL=InternalIndexOfExact.d.ts.map