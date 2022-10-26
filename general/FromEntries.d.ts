import type { ObjectKey } from "../objects";
export type FromEntries<E extends [ObjectKey, any][]> = [
    ...{
        [K in keyof E]: E[K][1];
    }
];
//# sourceMappingURL=FromEntries.d.ts.map