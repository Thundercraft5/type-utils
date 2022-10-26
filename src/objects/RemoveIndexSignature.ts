import { Decrement } from "../numbers";
import { ExactKeyof } from "./ExactKeyof";
import { ObjectKey } from "./ObjectKey";

import type { ExcludeExact, Reconstruct } from "../general";

/**
 * Removes the index signature from {@linkcode O}.
 */
export type RemoveIndexSignature<O> = {
	[K in keyof O as ExcludeExact<K, PropertyKey>]: O[K]
};


type $4 = RemoveMixedArrayIndexSignature<{ [key: number]: any; key: string } & [0, 1, 2, 3]>;