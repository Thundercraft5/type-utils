/* eslint-disable @typescript-eslint/sort-type-union-intersection-members, multiline-comment-style */
import type { AbstractFunction, HigherOrderFunction } from "../functions";
import type { Any, Cast, Narrowable, Try } from ".";

type FinalReturnType<F> = F extends AbstractFunction
	? ReturnType<F> extends AbstractFunction
		? FinalReturnType<ReturnType<F>>
		: ReturnType<F>
	: F;

type RawNarrow<A> =
| (A extends Narrowable ? A : never) // Handle literals
| (A extends string ? `${ A }` : never) // Make strings the correct type from function return types
// | (A extends HigherOrderFunction<A> ? HigherOrderFunction<RawNarrow<A>> : never)
| (A extends Function ? (...args: any[]) => RawNarrow<A> & HigherOrderFunction<RawNarrow<A>> : never)
| (A extends [] ? [] : never) // Handle empty arrays
| (A extends object ? { [K in keyof A]: RawNarrow<A[K]> } : never); // Handle objects/arrays

type NarrowReturnType<T> = T extends AbstractFunction<infer R, infer A> ? RawNarrow<FinalReturnType<T>> : void;

/**
 * Note: Does not handle the following cases, otherwise works for any type:
 * * `() => () => 0`
 * * `() => "test${0}"`
 */
export type Narrow<T extends any> = Cast<T, Try<T, [], RawNarrow<T>>>;

// function $0<T>(m: Exclude<NarrowReturnType<T> | T, Narrowable>): T {
// 	return m as any;
// }

// $0(() => () => `${ 0 } ${ 1e23 }`);


/* function $0<T>(m: Narrow<T>) {
	return m;
}

const $1 = $0(0),
	$2 = $0({
		E: 0,
	}),
	$3 = $0([{ E: "" }, 0]),
	$4 = $0({
		E: ["test", 0, true, [0, { E: "" }]],
	}),
	$5 = $0(class $1 {}),
	$6 = $0(typeof Object),
	$7 = $0(String),
	$8 = $0(() => 0),
	$9 = $0({
		E: () => `$$P${ 0 }`,
		E2: "",
	}),
	$10 = $0(() => () => () => 0),
	$11 = $0(() => () => ({ E: "" })),
	$12 = $0(() => () => ({
		E: "test",
		f: () => `0${ 0 }`,
		f2: () => () => ({ E: `0${ 0 }` }),
		f1: () => 0,
	})),
	$13 = $0(() => ({ E: "", f: [0, true, () => ({ E: "" })] })); */