import { ArrayEntries } from "./ArrayEntries";
import { ArrayKeys } from "./ArrayKeys";
import { FromArrayEntries } from "./FromArrayEntries";

import type { FromEntries } from "../general/FromEntries";
import type { FilterElements } from "./FilterElements";
type RemoveIndexes<A extends any[], I extends ArrayKeys<A>> = FromArrayEntries<FilterElements<ArrayEntries<A>, [I, any]>>;