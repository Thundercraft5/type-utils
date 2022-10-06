import type { AbstractFunction } from "../functions";

export type WritablePropertyNames<T> = {
	[K in keyof T]-?: T[K] extends AbstractFunction
		? never
		: (<F>() => F extends { [Q in K]: T[K] } ? 1 : 2) extends <F>() => F extends {
			-readonly [Q in K]: T[K];
		}
			? 1
			: 2
			? K
			: never;
}[keyof T];