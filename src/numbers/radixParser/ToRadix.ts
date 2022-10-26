import type { Divide } from "../Divide";
import type { LessThan } from "../LessThan";
import type { Modulo } from "../Modulo";
import type { FromRadix } from "./FromRadix";
import type { Numbers } from "./Numbers";


/**	
 * Converts numbers to the specified radix (base) in string format
 * 
 * @template N The number to convert to
 * @template [R] The Radix (base) to convert {@linkcode N} to
 * @see {@linkcode FromRadix}
 */
export type ToRadix<N extends number, R extends keyof Numbers = 10> = LessThan<N, R> extends true
	? Numbers[Modulo<N, R> & keyof Numbers]
	: `${ ToRadix<Divide<N, R>, R> }${ Numbers[Modulo<N, R> & keyof Numbers] }`;