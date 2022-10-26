import type { ToNumber } from "../numbers";
import type { FilterElements } from "./FilterElements";
import type { FirstIndexOf } from "./FirstIndexOf";
import type { LastIndexOf } from "./LastIndexOf";

/**	
 * @internal Used only for {@linkcode LastIndexOf} and {@linkcode FirstIndexOf}.
 */
export type InternalIndexOf<A extends any[], E> = FilterElements<{
	[K in keyof A]: A[K] extends E ? ToNumber<K & string> : never;
}, never>;