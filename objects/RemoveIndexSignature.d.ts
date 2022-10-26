import type { ExcludeExact } from "../general";
/**
 * Removes the index signature from {@linkcode O}.
 */
export type RemoveIndexSignature<O> = {
    [K in keyof O as ExcludeExact<K, PropertyKey>]: O[K];
};
//# sourceMappingURL=RemoveIndexSignature.d.ts.map