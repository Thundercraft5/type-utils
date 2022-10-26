import type { DisallowDuplicates } from "./DisallowDuplicates";
import type { FilterElements } from "./FilterElements";
export type RemoveDuplicates<A extends any[]> = FilterElements<DisallowDuplicates<A>, never>;
//# sourceMappingURL=RemoveDuplicates.d.ts.map