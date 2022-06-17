export * from "./constructors";
export * from "./numberUtils";
export declare type ValueOf<O extends {}, V extends keyof O = keyof O> = O[V];
export declare type Primitive = bigint | boolean | number | string | symbol | null | undefined;
export declare type StringKeyOf<BaseType extends {}> = `${Extract<keyof BaseType, number | string>}`;
//# sourceMappingURL=index.d.ts.map