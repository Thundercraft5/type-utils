export type OneOf<T, V extends any[] = [], NK extends keyof V = Exclude<keyof V, keyof any[]>> = {
    [K in NK]: T extends V[K] ? V[K] : never;
}[NK];
//# sourceMappingURL=OneOf.d.ts.map