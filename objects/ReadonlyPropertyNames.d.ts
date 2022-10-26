import type { WritablePropertyNames } from "./WritablePropertyNames";
export type ReadonlyPropertyNames<O extends object> = Exclude<keyof O, WritablePropertyNames<O>>;
//# sourceMappingURL=ReadonlyPropertyNames.d.ts.map