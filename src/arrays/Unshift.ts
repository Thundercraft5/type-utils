export type Unshift<A extends any[], E extends any[] = []> = E["length"] extends 1
	? [E[0], ...A]
	: E extends [infer T, ...infer R]
		? [T, ...Unshift<A, R>]
		: [];

	type $2 = Unshift<[4, 5, 6], [0, 1, 2, 3]>;