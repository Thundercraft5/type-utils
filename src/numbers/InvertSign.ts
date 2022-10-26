import type { ForbidWideValue, Widen } from "../general";
import type { IsNegative } from "./IsNegative";
import type { Numeric } from "./Numeric";

export type InvertSign<N extends Numeric> = ForbidWideValue<N> extends N
	? IsNegative<N> extends true
		// Negative to Positive
		? `${ N }` extends `-${ infer S extends Widen<N> & bigint }`
			? S
			: `${ N }` extends `-${ infer S extends Widen<N> & number }`
				? S
				: N
		// Positive to Negative
		: `-${ N }` extends `${ infer S extends Widen<N> & bigint }`
			? S
			: `-${ N }` extends `${ infer S extends Widen<N> & number }`
				? S
				: N
	: N;
type $2 = InvertSign<bigint>;