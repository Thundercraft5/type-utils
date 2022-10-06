import type { ExtractKeys } from "./ExtractKeys";

export type PickByValue<T extends object, V> = Pick<T, ExtractKeys<T, V>>;