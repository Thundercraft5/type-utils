import type { ReverseString } from "./ReverseString";
import type { TrimRight } from "./TrimRight";
import type { Whitespace } from "./Whitespace";
export type TrimLeft<S, T extends string = Whitespace> = S extends string ? ReverseString<TrimRight<ReverseString<S>, T>> : never;
//# sourceMappingURL=TrimLeft.d.ts.map