import type { Decrement } from "../numbers";

export type RemoveArrayIndexSignature<O extends { [key: number]: unknown; length: number }> = O["length"] extends 1
	? [O[0]]
	: Decrement<O["length"]> extends keyof O
		? [...RemoveArrayIndexSignature<Omit<O, "length"> & { length: Decrement<O["length"]> }>, O[Decrement<O["length"]>]]
		: [];