import type { ExtractExact } from "./ExtractExact";
import type { Reconstruct } from "./Reconstruct";


export type NarrowConstrainedObject<T> = Reconstruct<{
	[K in keyof T]: T[K] extends object ? NarrowConstrainedObject<T[K]> : T[K];
}>;