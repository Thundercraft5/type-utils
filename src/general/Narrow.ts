/* eslint-disable @typescript-eslint/sort-type-union-intersection-members */
import type { NarrowArray } from "../arrays";
import type { AbstractFunction, HigherOrderFunction } from "../functions";
import type { DeepReadonly, MakeRequired, ObjectKey, Spread } from "../objects";
import type { AlwaysNarrow, Any, BoundedNarrow, Cast ,ForbidWide,Narrowable, NarrowRest , Try } from ".";



type FinalReturnType<F> = F extends AbstractFunction
	? ReturnType<F> extends AbstractFunction
		? FinalReturnType<ReturnType<F>>
		: ReturnType<F>
	: F;

export type RawNarrow<A> = (
	| (A extends Function ? A : never)
	| (A extends Narrowable ? A : never) // Handle literals
	// | (A extends Function ? ((...args: any[]) => RawNarrow<A>) | ((...args: any[]) => HigherOrderFunction<RawNarrow<A>>) & A : never)
	| []
	| { [K in keyof A]: RawNarrow<A[K]> }); // Handle objects/arrays


/**
 * Note: Does not handle the following cases, otherwise works for any type:
 * * `() => 0`
 */
export type Narrow<T extends any> = ((Cast<T, RawNarrow<T> | []>) & T) | T;