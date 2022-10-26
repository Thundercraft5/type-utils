import type { Decrement, InvertSign, IsNegative } from "../numbers";
import type { AtIndex } from "./AtIndex";
import { ReverseTuple } from "./ReverseTuple";

export type At<A extends any[], I extends number> = IsNegative<I> extends true ? ReverseTuple<A>[Decrement<InvertSign<I>>] : A[I];