export type DeepWritable<T> = T extends object ? {
	-readonly [K in keyof T]: DeepWritable<T[K]>;
} : T;