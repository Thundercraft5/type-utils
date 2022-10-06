import type { StringsToNumber } from "../numbers";

export type ArrayKeys<A extends any[]> = StringsToNumber<string & keyof A>;