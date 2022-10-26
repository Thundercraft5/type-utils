import type { First } from "./First";
import type { RemoveFirst } from "./RemoveFirst";

export type ReverseTuple<A extends any[]> = any[] extends A
	? A
	: A extends []
		? []
		: [...ReverseTuple<RemoveFirst<A>>, First<A>];