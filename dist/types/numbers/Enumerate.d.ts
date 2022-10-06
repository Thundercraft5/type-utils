import type { EnumerateInternal } from "./EnumerateInternal";
export type Enumerate<N extends number = 1> = number extends N ? N : EnumerateInternal<[], N> extends (infer E)[] ? E : never;
//# sourceMappingURL=Enumerate.d.ts.map