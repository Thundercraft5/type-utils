import type { Decrement } from "../numbers/Decrement";
import { SliceEnd } from "./SliceEnd";

/**
 * Works like {@linkcode SliceEnd}, but it works as if the number passed is a negative index (counting from the end of the array)
 * 
 * @template A The array to slice
 * @template E The number to slice (counting from the end of the array)
 * 
 * @see {@linkcode SliceEnd}
 */
export type SliceEndFromNegative<A extends any[], E extends number = 0> = A extends [...infer R, any]
	? 0 extends E
		? A
		: SliceEndFromNegative<R, Decrement<E>>
	: A;