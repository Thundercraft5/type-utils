import type { LessThan } from "./LessThan";
import type { Subtract } from "./Subtract";


export type Modulo<A extends number, B extends number> = LessThan<A, B> extends true
	? A
	: Modulo<Subtract<A, B>, B>;