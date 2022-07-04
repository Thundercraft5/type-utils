import type { Narrowable } from "../general";
export declare type DeepReadonly<T> = T extends Function | Narrowable ? T : {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};
//# sourceMappingURL=DeepReadonly.d.ts.map