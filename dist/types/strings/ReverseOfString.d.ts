import type { FirstOfString } from "./FirstOfString";
import type { RemoveFirstOfString } from "./RemoveFirst";
export type ReverseString<S extends string> = string extends S ? string : S extends "" ? "" : S extends "0" | "1" ? S : `${ReverseString<RemoveFirstOfString<S>>}${FirstOfString<S>}`;
//# sourceMappingURL=ReverseOfString.d.ts.map