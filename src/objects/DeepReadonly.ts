import type { Narrowable } from "../general";

export type DeepReadonly<T> =
	T extends Function | Narrowable
		? T
		: { readonly [P in keyof T]: DeepReadonly<T[P]>; };