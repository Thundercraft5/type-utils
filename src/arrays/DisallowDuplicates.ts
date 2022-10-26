import { FirstIndexOf } from "./FirstIndexOf";

import type { ToNumber } from "../numbers";
import type { LastIndexOf } from "./LastIndexOf";

export type DisallowDuplicates<A extends any[]> = [...{
	[K in keyof A]: LastIndexOf<A, A[K]> extends FirstIndexOf<A, A[K]>
		? A[K]
		: ToNumber<K> extends FirstIndexOf<A, A[K]>
			? A[K]
			: never;
}];