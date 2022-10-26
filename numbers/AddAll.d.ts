import type { Add } from "./Add";
export type AddAll<A extends number[] = []> = A extends [infer N extends number, ...infer R extends number[]] ? Add<N, AddAll<R>> : 0;
//# sourceMappingURL=AddAll.d.ts.map