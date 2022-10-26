import { ToNumber } from "../numbers";

export type IndexOf<A extends any[], E> = {
	[K in keyof A]: E extends A[K] ? ToNumber<K & string> : never;
}[keyof A];