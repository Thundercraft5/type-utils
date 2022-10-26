import { RemoveIndexSignature } from "./RemoveIndexSignature";

import type { ExcludeExact } from "../general";

/**
 * Gets the exact keys of {@linkcode O}, without the index signature mixed in.
 */
export type ExactKeyof<O> = keyof RemoveIndexSignature<O>;