export type TupleToIntersection<T extends any[]> = T extends [infer U, ...infer R] ? TupleToIntersection<R> & U : {};
//# sourceMappingURL=TupleToIntersection.d.ts.map