export type ValueOf<O extends {}, K extends keyof O = keyof O> = O extends (any[] | readonly any[]) ? O[Extract<K, number>] : O[K];
//# sourceMappingURL=ValueOf.d.ts.map