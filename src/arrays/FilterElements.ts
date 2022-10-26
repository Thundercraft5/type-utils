import type { First } from "./First";
import { RemoveFirst } from "./RemoveFirst";

export type FilterElements<A extends any[], F> = A extends []
	? A
	: A extends [F, ...infer R]
		? FilterElements<R, F>
		: [First<A>, ...FilterElements<RemoveFirst<A>, F>];