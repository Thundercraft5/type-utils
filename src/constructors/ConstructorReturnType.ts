import { AbstractConstructor } from "./AbstractConstructor";

export type ConstructorReturnType<T extends AbstractConstructor> = T extends AbstractConstructor<infer R> ? R : unknown;
