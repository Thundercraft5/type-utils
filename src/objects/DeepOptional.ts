export type DeepOptional<T> = T extends object ? {
	[P in keyof T]+?: DeepOptional<T[P]> | undefined;
} : T;