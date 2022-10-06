import type { FirstOfTuple } from "./FirstOfTuple";
import type { RemoveFirstOfTuple } from "./RemoveFirstOfTuple";
export type Reverse<A extends any[]> = any[] extends A ? A : A extends [] ? [] : [...Reverse<RemoveFirstOfTuple<A>>, FirstOfTuple<A>];
//# sourceMappingURL=Reverse.d.ts.map