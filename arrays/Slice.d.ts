import { Head } from "./Head";
import { Tail } from "./Tail";
type IndexToPositive<Index extends number, Arr extends unknown[], Acc extends unknown[] = []> = `${Index}` extends `-${number}` ? `${Index}` extends `-${Acc['length']}` ? Arr['length'] : IndexToPositive<Index, Head<Arr>, [...Acc, unknown]> : Index;
type Split<Arr extends unknown[], Index extends number, BufHead extends unknown[] = [], BufTail extends unknown[] = Arr> = BufHead['length'] extends IndexToPositive<Index, Arr> ? [BufHead, BufTail] : Split<Arr, Index, [...BufHead, BufTail[0]], Tail<BufTail>>;
export type Slice<Arr extends unknown[], Start extends number = 0, End extends number = Arr["length"]> = Split<Arr, End> extends [infer Init extends unknown[], any] ? Split<Init, Start> extends [any, infer Result] ? Result : [] : [];
export {};
//# sourceMappingURL=Slice.d.ts.map