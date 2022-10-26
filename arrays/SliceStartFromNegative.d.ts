/**
 * Works like {@linkcode SliceStart}, but it works as if the number passed is a negative index (counting from the end of the array)
 *
 * @template A The array to slice
 * @template E The number to slice (counting from the end of the array)
 *
 * @see {@linkcode SliceStart}
 */
export type SliceStartFromNegative<A extends any[], E extends number = 0> = A extends [any, ...infer R] ? A["length"] extends E ? A : SliceStartFromNegative<R, E> : A;
//# sourceMappingURL=SliceStartFromNegative.d.ts.map