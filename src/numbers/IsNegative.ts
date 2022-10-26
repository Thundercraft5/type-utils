import type { Numeric } from "./Numeric";

export type IsNegative<T extends Numeric> = `${ T }` extends `-${ string }` ? true : false;