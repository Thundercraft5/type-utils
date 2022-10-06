export type Optional<O extends object, P extends keyof O = keyof O> = {
	[K in P]+?: O[K] | undefined;
};