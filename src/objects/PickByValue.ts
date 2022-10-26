import type { ConditionalKeys } from "./ConditionalKeys";

export type PickByValue<T extends object, V> = Pick<T, ConditionalKeys<T, V>>;