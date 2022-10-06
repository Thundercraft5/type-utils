import type { ObjectEntries } from "./ObjectEntries";
import type { ValueOf } from "./ValueOf";

export type ExtractKeys<T extends object, V> = Extract<ObjectEntries<T>[number], [string, V]>[0];