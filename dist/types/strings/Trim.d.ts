import { TrimLeft } from "./TrimLeft";
import { TrimRight } from "./TrimRight";
import { Whitespace } from "./Whitespace";
export type Trim<S, T extends string = Whitespace> = S extends string ? TrimRight<TrimLeft<S, T>, T> : never;
//# sourceMappingURL=Trim.d.ts.map