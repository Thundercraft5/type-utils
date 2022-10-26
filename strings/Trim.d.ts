import type { TrimLeft } from "./TrimLeft";
import type { TrimRight } from "./TrimRight";
import type { Whitespace } from "./Whitespace";
export type Trim<S, T extends string = Whitespace> = S extends string ? TrimRight<TrimLeft<S, T>, T> : never;
//# sourceMappingURL=Trim.d.ts.map