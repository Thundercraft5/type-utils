export type FromArrayEntries<E extends any[]> = E extends [number | `${bigint}`, any][] ? [
    ...{
        [K in keyof E]: E[K][1];
    }
] : never;
//# sourceMappingURL=FromArrayEntries.d.ts.map