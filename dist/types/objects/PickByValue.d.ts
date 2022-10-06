import type { ExtractKeys } from "./ExtractKeys";
export type PickByValue<T extends object, V> = Pick<T, ExtractKeys<T, V>>;
//# sourceMappingURL=PickByValue.d.ts.map