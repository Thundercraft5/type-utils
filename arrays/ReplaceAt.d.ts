import type { ToNumber } from "../numbers";
import type { ArrayKeys } from "./ArrayKeys";
export type ReplaceAt<A extends any[], I extends ArrayKeys<A>, E> = [
    ...{
        [K in keyof A]: ToNumber<K> extends I ? E : A[K];
    }
];
//# sourceMappingURL=ReplaceAt.d.ts.map