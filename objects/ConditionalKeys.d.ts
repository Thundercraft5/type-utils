import type { ObjectEntries } from "./ObjectEntries";
export type ConditionalKeys<T, V> = Extract<ObjectEntries<T>[number], [string, V]>[0];
//# sourceMappingURL=ConditionalKeys.d.ts.map