import type { BuildTuple, TupleLength } from "../arrays";

export type Add<A extends number, B extends number> =
    TupleLength<[...BuildTuple<A>, ...BuildTuple<B>]>;