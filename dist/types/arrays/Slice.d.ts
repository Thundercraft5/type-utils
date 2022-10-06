import type { SliceEnd } from "./SliceEnd";
import type { SliceStart } from "./SliceStart";
export type Slice<A extends any[], S extends number = 0, E extends number = A["length"]> = SliceStart<SliceEnd<A, E>, S>;
//# sourceMappingURL=Slice.d.ts.map