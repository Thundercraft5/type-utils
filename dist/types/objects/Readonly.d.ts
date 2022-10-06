export type Readonly<O extends object, P extends keyof O = keyof O> = {
    -readonly [K in P]: O[K];
};
//# sourceMappingURL=Readonly.d.ts.map