export type MakeRequired<O, K extends keyof O> =
	Pick<O, Exclude<keyof O, K>> & Required<Pick<O, K>>;