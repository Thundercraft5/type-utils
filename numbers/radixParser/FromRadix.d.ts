import { ReverseTuple } from "../../arrays";
import { AddAll } from "../AddAll";
import { Exponent } from "../Exponent";
import { Multiply } from "../Multiply";
import { Range } from "../Range";
import { ToNumber } from "../ToNumber";
import { Numbers } from "./Numbers";
type LettersMap = InvertPairs<Numbers>;
type InvertPairs<O extends Record<any, any>> = {
    [K in keyof O as O[K]]: K;
};
type FromRadix$1<E extends [number, number][], R extends keyof Numbers = 10> = E extends [
    [
        infer E extends number,
        infer N extends number
    ],
    ...infer T extends [number, number][]
] ? [Multiply<N, Exponent<R, E>>, ...FromRadix$1<T, R>] : [];
type FromRadix$2<S extends string, R extends keyof Numbers> = S extends `${infer N extends Numbers[Exclude<keyof Numbers, Range<R, 36>>]}${infer T}` ? [LettersMap[N & keyof LettersMap], ...FromRadix$2<T, R>] : [];
/**
 * Parses integers in string from the specified radix (base) to numbers
 *
 * @template S The String to parse
 * @template [R] The Radix (base) to parse {@linkcode S} with
 * @see {@linkcode ToRadix}
 */
export type FromRadix<S extends string, R extends keyof Numbers> = AddAll<FromRadix$1<Extract<ReverseTuple<Extract<Entries<ReverseTuple<FromRadix$2<S, R>>>, any[]>>, [
    number,
    number
][]>, R>>;
type Entries<T extends any[]> = {
    [K in keyof T]: [ToNumber<K>, T[K]];
};
export {};
//# sourceMappingURL=FromRadix.d.ts.map