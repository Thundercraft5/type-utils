export type GetTupleElement<T extends any[], E> = T extends [infer Try, ...infer Rest] ? E extends Try ? Try : GetTupleElement<Rest, E> : never;
//# sourceMappingURL=GetTupleElement.d.ts.map