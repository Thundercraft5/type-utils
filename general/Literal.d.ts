import type { Narrowable } from "./Narrowable";
import { Widen } from "./Widen";
export type Literal<T> = T extends Narrowable ? Extract<Narrowable, Widen<T>> extends T ? never : T : never;
//# sourceMappingURL=Literal.d.ts.map