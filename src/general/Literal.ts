import type { Narrowable } from "./Narrowable";
import type { OneOf } from "./OneOf";
import { Widen } from "./Widen";

export type Literal<T> = T extends Narrowable ? Extract<Narrowable, Widen<T>> extends T ? never : T : never;