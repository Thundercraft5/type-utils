export type StringKeyOf<BaseType extends {}> = `${Extract<keyof BaseType, number | string>}`;
