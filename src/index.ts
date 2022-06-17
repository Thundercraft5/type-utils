export * from "./constructors";
export * from "./numberUtils";
export type ValueOf<O extends {}, V extends keyof O = keyof O> = O[V];
export type Primitive = bigint | boolean | number | string | symbol | null | undefined;
export type StringKeyOf<BaseType extends {}> = `${ Extract<keyof BaseType, number | string> }`;