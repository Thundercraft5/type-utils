export type Writable<O extends object, P extends keyof O = keyof O> = {
	-readonly [K in P]: O[K]
};