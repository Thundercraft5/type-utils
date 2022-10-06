import type { Narrowable, Widen } from "../general";

export type DeepWiden<T> = T extends Function | Narrowable ? Widen<T> : {
	[K in keyof T]: Widen<T[K]>;
};