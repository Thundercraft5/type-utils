import type { RestrictToPositive } from "../numbers";

type Chunk$1<A extends any[], N extends number, C extends any[] = []> =
	C["length"] extends N
		? [C, ...Chunk$1<A, N>]
		: A extends [infer F, ...infer R]
			? Chunk$1<R, N, [...C, F]>
			: C extends []
				? C : [C];

export type Chunk<A extends any[], N extends number> = Chunk$1<A, RestrictToPositive<N>>;