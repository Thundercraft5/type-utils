export type ConditionalKeyExclude<T, V> = {
    [K in keyof T]: T[K] extends V ? never : K;
}[keyof T];
//# sourceMappingURL=ConditionalKeyExclude.d.ts.map