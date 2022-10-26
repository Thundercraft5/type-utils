import type { InternalIndexOf } from "./InternalIndexOf";
export type FirstIndexOf<A extends any[], E> = A extends [] ? -1 : undefined extends InternalIndexOf<A, E>[0] ? -1 : InternalIndexOf<A, E>[0];
//# sourceMappingURL=FirstIndexOf.1.d.ts.map