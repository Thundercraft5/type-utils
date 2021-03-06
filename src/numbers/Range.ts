import type { Enumerate } from "./Enumerate";

export type Range<S extends number = 0, E extends number = 1> = Exclude<Enumerate<E>, Enumerate<S>>;