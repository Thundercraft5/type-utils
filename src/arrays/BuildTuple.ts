export type BuildTuple<N extends number = 0, T = any, A extends T[] = []> =
	A["length"] extends N
		? A
		: BuildTuple<N, T, [...A, T]>;