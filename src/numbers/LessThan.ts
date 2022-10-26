import type { EqualsExact } from "../general/EqualsExact";
import type { AtTerminus } from "./AtTerminus";
import type { Subtract } from "./Subtract";


export type LessThan<A extends number, B extends number> = AtTerminus<A, B> extends true
	? EqualsExact<A, B> extends true
		? false
		: (A extends 0 ? true : false)
	: LessThan<Subtract<A, 1>, Subtract<B, 1>>;