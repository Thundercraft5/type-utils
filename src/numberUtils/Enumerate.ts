import type { EnumerateInternal } from "./EnumerateInternal";

export type Enumerate<N extends number = 1> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;