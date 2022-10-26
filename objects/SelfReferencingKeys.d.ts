export type SelfReferencingKeys<T> = {
    [K in keyof T]: T extends T[K] ? T[K] extends T ? K : never : never;
}[keyof T];
//# sourceMappingURL=SelfReferencingKeys.d.ts.map