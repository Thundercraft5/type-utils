import type { _ } from "./_";

/** Reconstructs an intersection of objects to a unified one */
export type Reconstruct<T> = _<{ [K in keyof T]: T[K] }>;