import type { ExtractExact } from "../general";
import type { ObjectEntries } from "./ObjectEntries";
import type { ValueOf } from "./ValueOf";

/**
 * @see {@linkcode ObjectEntries}
 */
export type ConditionalKeysExact<T, V> = ExtractExact<ObjectEntries<T>[number], [string, V]>[0];