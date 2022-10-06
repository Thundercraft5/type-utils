import type { Reconstruct } from "../general";

export type MakeReadonly<O, K extends keyof O = keyof O> =
	Pick<O, Exclude<keyof O, K>> & Readonly<Pick<O, K>>;