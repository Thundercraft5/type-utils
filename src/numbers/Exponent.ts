import type { Decrement } from "./Decrement";
import type { Multiply } from "./Multiply";


export type Exponent<A extends number, B extends number> = B extends 1
	? A
	: B extends 0
		? 1
		: Exponent<Multiply<A, A>, Decrement<B>>;