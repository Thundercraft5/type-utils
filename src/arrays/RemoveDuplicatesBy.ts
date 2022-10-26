import type { DisallowDuplicatesBy } from "./DisallowDuplicatesBy";
import type { FilterElements } from "./FilterElements";

export type RemoveDuplicatesBy<A extends any[], E> = FilterElements<DisallowDuplicatesBy<A, E>, never>;