import type { Split } from "./Split";

export type Count<S extends string, S2 extends string> = Split<S, S2>["length"];