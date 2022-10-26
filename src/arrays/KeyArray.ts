import { ToNumber } from "../numbers";

export type KeyArray<A extends any[]> = [...{
	[K in keyof A]: ToNumber<K>;
}];