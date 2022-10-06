import type { SliceTupleEnd } from "./SliceTupleEnd";
import type { SliceTupleStart } from "./SliceTupleStart";

export type SliceTuple<
	A extends any[],
	S extends number = 0,
	E extends number = A["length"],
> = SliceTupleStart<SliceTupleEnd<A, E>, S>;