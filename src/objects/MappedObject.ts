export type MappedObject<O extends {}> = {
	[K in keyof O]: O[K]
};