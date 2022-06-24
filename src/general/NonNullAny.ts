import type { Any } from "./Any";

export type NonNullAny = Exclude<Any, null | undefined>;