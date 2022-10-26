import type { ObjectEntries } from "./ObjectEntries";
import type { ValueOf } from "./ValueOf";

export type ConditionalKeys<T, V> = Extract<ObjectEntries<T>[number], [string, V]>[0];