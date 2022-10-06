import type { ForbidWideValue } from "./ForbidWideValue";
import type { Narrowable } from "./Narrowable";
type ForbidWide$1<T> = ((T extends Narrowable ? ForbidWideValue<T> : {
    [K in keyof T]: ForbidWide$1<T[K]>;
}));
export type ForbidWide<T> = ForbidWide$1<T> & ForbidWide$2<T>;
type ForbidWide$2<T> = ForbidWide$1<T> | T;
export {};
//# sourceMappingURL=ForbidWide.d.ts.map