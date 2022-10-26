import type { ConditionalKeys } from "./ConditionalKeys";

export type ConditionalPick<T extends object, V> = Pick<T, ConditionalKeys<T, V>>;