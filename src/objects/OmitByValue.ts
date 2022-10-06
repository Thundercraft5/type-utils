import type { ExtractKeys } from "./ExtractKeys";

export type OmitByValue<T extends object, V> = Omit<T, ExtractKeys<T, V>>;