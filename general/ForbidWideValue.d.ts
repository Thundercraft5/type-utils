import type { Narrowable } from "./Narrowable";
export type ForbidWideValue<V> = V extends Narrowable ? V extends string ? string extends V ? never : V : V extends number ? number extends V ? never : V : V extends boolean ? boolean extends V ? never : V : V extends bigint ? bigint extends V ? never : V : V : V;
//# sourceMappingURL=ForbidWideValue.d.ts.map