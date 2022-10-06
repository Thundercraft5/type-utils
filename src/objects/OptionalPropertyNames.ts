export type OptionalPropertyNames<T> = {
	[K in keyof T]-?: ({} extends {
		[P in K]: T[K];
	} ? K : never);
}[keyof T];