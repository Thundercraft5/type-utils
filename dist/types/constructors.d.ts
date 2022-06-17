export declare type AbstractConstructor<T = any, A extends any[] = any[]> = abstract new (...args: A) => T;
export declare type ConstructorReturnType<T extends AbstractConstructor> = T extends AbstractConstructor<infer R> ? R : unknown;
//# sourceMappingURL=constructors.d.ts.map