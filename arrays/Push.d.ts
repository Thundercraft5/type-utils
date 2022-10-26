export type Push<A extends any[], E extends any[] = []> = E["length"] extends 1 ? [...A, E[0]] : E extends [infer T, ...infer R] ? [T, ...Push<A, R>] : [];
//# sourceMappingURL=Push.d.ts.map