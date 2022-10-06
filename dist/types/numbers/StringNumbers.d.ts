export type StringNumbers<S extends string> = S extends `${infer N extends number}` ? N : never;
//# sourceMappingURL=StringNumbers.d.ts.map