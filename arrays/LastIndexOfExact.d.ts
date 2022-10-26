import { LastOf } from "./LastOf";
import type { ArrayKeys } from "./ArrayKeys";
import type { InternalIndexOfExact } from "./InternalIndexOfExact";
import type { LastIndex } from "./LastIndex";
export type LastIndexOfExact<A extends any[], E> = LastIndex<InternalIndexOfExact<A, E>> extends ArrayKeys<InternalIndexOfExact<A, E>> ? LastOf<InternalIndexOfExact<A, E>> : -1;
//# sourceMappingURL=LastIndexOfExact.d.ts.map