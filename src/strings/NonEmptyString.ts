import type { Trim } from "./Trim";

export type NonEmptyString<T> = T extends string ? "" extends Trim<T> ? never : T : never;