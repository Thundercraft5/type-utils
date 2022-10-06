import type { ObjectEntries } from "./ObjectEntries";
export type ExtractKeys<T extends object, V> = Extract<ObjectEntries<T>[number], [string, V]>[0];
//# sourceMappingURL=ExtractKeys.d.ts.map