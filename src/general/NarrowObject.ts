import { Cast } from ".";

import type { Try } from ".";
import type { RawNarrowBase } from "./Narrow";


export type NarrowObject<T> = Cast<T,
{
	[K in keyof T]: NarrowObject<T[K]> & RawNarrowBase<T[K]>;
} // Handle objects/arrays
>;