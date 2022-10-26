import type { Narrowable } from "../general";
export type DeepReadonly<T> = T extends Function | Narrowable ? T : {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
//# sourceMappingURL=DeepReadonly.d.ts.map