import { ToStringable } from "../values";

export type ToNumber<S extends ToStringable> = `${S}` extends `${ infer N extends number }` ? N : never;