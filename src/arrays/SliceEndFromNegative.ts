import type { Decrement } from "../numbers/Decrement";

export type SliceEndFromNegative<A extends any[], E extends number = 0> = A extends [...infer R, any]
	? 0 extends E
		? A
		: SliceEndFromNegative<R, Decrement<E>>
	: A;