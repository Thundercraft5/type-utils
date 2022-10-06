export type Required<O extends object, P extends keyof O = keyof O> = {
	[K in P]-?: Exclude<O[K], undefined>
};