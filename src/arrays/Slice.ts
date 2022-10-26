import { Head } from "./Head";
import { SliceEndFromNegative } from "./SliceEndFromNegative";
import { Tail } from "./Tail";

import type { InvertSign, IsNegative } from "../numbers";
import type { AtIndex } from "./AtIndex";
import type { SliceEnd } from "./SliceEnd";
import type { SliceStart } from "./SliceStart";
import type { SliceStartFromNegative } from "./SliceStartFromNegative";
// Transform a negative index in array to positive depending on the array in question, if it's already positive just keep it
type IndexToPositive<Index extends number, Arr extends unknown[], Acc extends unknown[] = []> = `${Index}` extends `-${number}` 
  ?  `${Index}` extends `-${Acc['length']}` 
    ? Arr['length']
    : IndexToPositive<Index, Head<Arr>, [...Acc, unknown]>
  : Index

// Split array into two by index, negatives supported
type Split<Arr extends unknown[], Index extends number, BufHead extends unknown[] = [], BufTail extends unknown[] = Arr> = 
  BufHead['length'] extends IndexToPositive<Index, Arr>
    ? [BufHead, BufTail]
    : Split<Arr, Index, [...BufHead, BufTail[0]], Tail<BufTail>>

// Operating with splits, discard everything after the End index, then everything before the Start index and keep the result
export type Slice<Arr extends unknown[], Start extends number = 0, End extends number = Arr["length"]> =
  Split<Arr, End> extends [infer Init extends unknown[], any]
    ? Split<Init, Start> extends [any, infer Result]
      ? Result
      : []
	: [] 
	