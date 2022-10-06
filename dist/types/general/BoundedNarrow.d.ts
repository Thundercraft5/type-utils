import type { Narrow } from "./Narrow";
import type { Restrict } from "./Restrict";
/**
 * @deprecated Superseded by Functionallity of {@linkcode Narrow}
 */
export type BoundedNarrow<T extends any, Bounds extends unknown> = Narrow<Restrict<T, Bounds>>;
//# sourceMappingURL=BoundedNarrow.d.ts.map