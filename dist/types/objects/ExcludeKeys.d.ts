export type ExcludeKeys<T, U> = {
    [K in keyof T]: T[K] extends U ? never : K;
}[keyof T];
//# sourceMappingURL=ExcludeKeys.d.ts.map