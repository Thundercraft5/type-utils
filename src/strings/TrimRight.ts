import type { Whitespace } from "./Whitespace";

export type TrimRight<S, T extends string = Whitespace> = S extends string
	? S extends `${ T }${ infer R extends string }`
		? TrimRight<R, T>
		: S
	: never;