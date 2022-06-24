import { AbstractConstructor } from "./AbstractConstructor";
export declare type ConstructorReturnType<T extends AbstractConstructor> = T extends AbstractConstructor<infer R> ? R : unknown;
//# sourceMappingURL=ConstructorReturnType.d.ts.map