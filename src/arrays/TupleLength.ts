export type TupleLength<T extends any[]> =
    T extends { length: infer L } ? L : typeof NaN;