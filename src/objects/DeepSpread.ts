/*
 * export type DeepSpread<A extends readonly [...any]> = A extends [infer L, ...infer R] ?
 * 	DeepSpread$1<L, DeepSpread<R>> : unknown;
 */
export {};