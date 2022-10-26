import type { ToNumber } from "../numbers";

export type ArrayEntries<A extends any[]> = {
	[K in keyof A]: [ToNumber<K>, A[K]];
};