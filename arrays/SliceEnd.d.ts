export type SliceEnd<A extends any[], E extends number = A["length"]> = A extends [...infer R, any] ? A["length"] extends E ? A : SliceEnd<R, E> : A;
//# sourceMappingURL=SliceEnd.d.ts.map