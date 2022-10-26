import type { IsNegative } from "./IsNegative";

export type RestrictToPositive<N extends number, Fail extends number = 1> =
	N extends 0
		? Fail
		: IsNegative<N> extends true
			? Fail
			: N;