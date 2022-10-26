import type { OmitByValue } from ".";

export type OmitSelfReferences<T> = OmitByValue<{
	[K in keyof T]: T extends T[K] ? never : T[K];
}, never>;