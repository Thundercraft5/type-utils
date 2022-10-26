import type { Decrement } from "../numbers/Decrement";
import { SliceStart } from "./SliceStart";

/**
 * Works like {@linkcode SliceStart}, but it works as if the number passed is a negative index (counting from the end of the array)
 * 
 * @template A The array to slice
 * @template E The number to slice (counting from the end of the array)
 * 
 * @see {@linkcode SliceStart}
 */
export type SliceStartFromNegative<A extends any[], E extends number = 0> = A extends [any, ...infer R]
	? A["length"] extends E
		? A
		: SliceStartFromNegative<R, E>
	: A;

	type $2 = SliceStartFromNegative<[0, 1, 2, 3, 4, 5, 6], 3>;