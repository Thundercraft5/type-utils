import { LastOf } from "./LastOf";

import type { ArrayKeys } from "./ArrayKeys";
import type { InternalIndexOf } from "./InternalIndexOf";
import type { LastIndex } from "./LastIndex";

export type LastIndexOf<A extends any[], E> = LastIndex<InternalIndexOf<A, E>> extends ArrayKeys<InternalIndexOf<A, E>>
	? LastOf<InternalIndexOf<A, E>>
	: -1;