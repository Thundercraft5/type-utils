import type { FirstOfString } from "./FirstOfString";
import type { RemoveFirst } from "./RemoveFirst";
export type ReverseOfString<S extends string> = string extends S ? string : S extends "" ? "" : S extends "0" | "1" ? S : `${ReverseOfString<RemoveFirst<S>>}${FirstOfString<S>}`;
//# sourceMappingURL=Reverse.d.ts.map