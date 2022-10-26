import type { ExtractExact } from "../general";
import type { ObjectEntries } from "./ObjectEntries";
/**
 * @see {@linkcode ObjectEntries}
 */
export type ConditionalKeysExact<T, V> = ExtractExact<ObjectEntries<T>[number], [string, V]>[0];
//# sourceMappingURL=ConditionalKeysExact.d.ts.map