export type PrependNextNum<A extends unknown[]> = A["length"] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;
