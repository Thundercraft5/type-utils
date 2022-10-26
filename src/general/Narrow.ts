/* eslint-disable @typescript-eslint/sort-type-union-intersection-members */
import { Narrowable } from "./Narrowable";

import type { NarrowArray } from "../arrays";
import type { Cast } from "./Cast";
import type { ExtractExact } from "./ExtractExact";
import type { NarrowConstrainedObject } from "./NarrowConstrainedObject";
import type { Restrict, RestrictNarrow } from "./Restrict";


/**
 * Base narrowing logic for all narrowing types.
 * @warning Usage will cause type issues. Recommended to use {@linkcode Narrow} instead.
 * @internal
 */
export type RawNarrowBase<A> = (
	| (A extends Function ? A : never)
	| (A extends Narrowable ? A : never) // Handle literals
	// | (A extends Function ? ((...args: any[]) => RawNarrow<A>) | ((...args: any[]) => HigherOrderFunction<RawNarrow<A>>) & A : never)
	| []
	| { [K in keyof A]: RawNarrowBase<A[K]> }); // Handle objects/arrays


/**
 * Note: Does not handle the following cases, otherwise works for any type:
 * * `() => 0`
 */
export type Narrow<T extends any> = ((Cast<T, RawNarrowBase<T> | []>) & T) | T;

/**
 * Note: Does not handle the following cases, otherwise works for any type:
 * * `() => 0`
 * 
 * Note: For default parameters, use either cast to `any` or the type you used for the parameter.
 * @template T The type to narrow
 * @template B The type to constrain {@linkcode T} to (uses {@linkcode Restrict}), defaults to {@linkcode T}
 */
export type BoundedNarrow<T, B = T> = ExtractExact<Narrow<Restrict<T, B>>, T>;