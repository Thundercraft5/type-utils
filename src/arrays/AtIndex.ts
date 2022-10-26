import { ArrayKeys } from "./ArrayKeys";
import { IsIndefiniteArray } from "./IsIndefiniteArray";

import type { InvertSign, IsNegative, Subtract } from "../numbers";

export type AtIndex<A extends any[], I extends number> = IsIndefiniteArray<A> extends true
	? number
	: IsNegative<I> extends true
		? Subtract<A["length"], InvertSign<I>> extends ArrayKeys<A>
			? Subtract<A["length"], InvertSign<I>>
			: -1
		: I;