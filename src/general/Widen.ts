import type { Narrowable } from "./Narrowable";

export type Widen<T> =
	T extends Narrowable ?
		T extends string ? string
		: T extends number ? number
		: T extends bigint ? bigint
		: T extends boolean ? boolean
		: T
		: T;