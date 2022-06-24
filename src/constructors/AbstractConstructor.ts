export type AbstractConstructor<T = any, A extends any[] = any[]> = abstract new (...args: A) => T;
