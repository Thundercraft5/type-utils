export type ObjectEntries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
//# sourceMappingURL=ObjectEntries.d.ts.map