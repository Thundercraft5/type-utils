import { Narrowable } from "./Narrowable";

/* eslint-disable @typescript-eslint/sort-type-union-intersection-members */
import type { Cast } from "./Cast";
import type { ExtractExact } from "./ExtractExact";
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

function $1<T extends string = "0">(value: Narrow<T> = "0" as T) {
	return null as any as T;
}

const item = $1();

item.slice(0, 1)