import type { EnumerateInternal } from "./EnumerateInternal";
export declare type Enumerate<N extends number = 1> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
//# sourceMappingURL=Enumerate.d.ts.map