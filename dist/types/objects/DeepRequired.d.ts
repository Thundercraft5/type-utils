export type DeepRequired<T> = T extends object ? {
    [P in keyof T]-?: Exclude<DeepRequired<T[P]>, undefined>;
} : T;
//# sourceMappingURL=DeepRequired.d.ts.map