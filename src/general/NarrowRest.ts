/* eslint-disable @typescript-eslint/sort-type-union-intersection-members */
import type { Cast, Narrowable } from ".";
import type { Narrow, RawNarrowBase } from "./Narrow";

/**
 * Narrows generic arguments to their literal types, in a similar fashion to {@linkcode Narrow}, but for arrays
 */
export type NarrowRest<T> = Cast<T,
| (T extends Narrowable ? T : never) // Handle literals
| [] // Handle empty arrays
| {
	[K in keyof T]: RawNarrowBase<T[K]>;
} // Handle objects/arrays
>;