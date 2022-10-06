import type { FirstOfTuple } from "./FirstOfTuple";
import type { RemoveFirstOfTuple } from "./RemoveFirstOfTuple";
export type ReverseTuple<A extends any[]> = any[] extends A ? A : A extends [] ? [] : [...ReverseTuple<RemoveFirstOfTuple<A>>, FirstOfTuple<A>];
//# sourceMappingURL=ReverseTuple.d.ts.map