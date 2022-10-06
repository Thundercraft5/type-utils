import type { Writable } from "./Writable";

export type MakeWritable<O extends object, K extends keyof O = keyof O> =
	Pick<O, Exclude<keyof O, K>> & Writable<Pick<O, K>>;