export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
//# sourceMappingURL=DeepPartial.d.ts.map