import type { WritablePropertyNames } from "./WritablePropertyNames";

export type WritableProperties<T> = Pick<T, WritablePropertyNames<T>>;