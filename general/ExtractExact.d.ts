/**
 * Works like {@linkcode Extract}, except it only extracts exact matches (or `any`)
 */
export type ExtractExact<T, U> = T extends U ? U extends T ? T : never : never;
//# sourceMappingURL=ExtractExact.d.ts.map