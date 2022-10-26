import { KeyArray } from "./KeyArray";
import type { ReverseTuple } from "./ReverseTuple";

type LastIndex$1<A extends any[]> = ReverseTuple<KeyArray<A>>[0];
export type LastIndex<A extends any[]> = undefined extends LastIndex$1<A> ? -1 : LastIndex$1<A>;