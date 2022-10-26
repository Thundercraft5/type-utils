import type { ToNumber } from "../numbers";
import type { FirstIndexOf } from "./FirstIndexOf";
import type { LastIndexOf } from "./LastIndexOf";
export type DisallowDuplicatesBy<A extends any[], E> = [
    ...{
        [K in keyof A]: LastIndexOf<A, E> extends FirstIndexOf<A, E> ? A[K] : ToNumber<K> extends FirstIndexOf<A, E> ? A[K] : A[FirstIndexOf<A, E> & keyof A];
    }
];
//# sourceMappingURL=DisallowDuplicatesBy.d.ts.map