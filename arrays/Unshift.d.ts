export type Unshift<A extends any[], E extends any[] = []> = E["length"] extends 1 ? [E[0], ...A] : E extends [infer T, ...infer R] ? [T, ...Unshift<A, R>] : [];
//# sourceMappingURL=Unshift.d.ts.map