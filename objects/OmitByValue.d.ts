import type { ConditionalKeys } from "./ConditionalKeys";
export type OmitByValue<T extends object, V> = Omit<T, ConditionalKeys<T, V>>;
//# sourceMappingURL=OmitByValue.d.ts.map