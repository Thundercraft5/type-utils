import type { ToNumber } from "../numbers";

export type ArrayKeys<A extends any[]> = ToNumber<Extract<keyof A, `${ bigint }`>>;