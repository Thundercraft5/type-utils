export type ThisParameterType<T extends (...args: any[]) => any> =
	T extends (this: infer U, ...args: any[]) => any
		? U
		: never;