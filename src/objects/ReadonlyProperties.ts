import type { ReadonlyPropertyNames } from "./ReadonlyPropertyNames";

export type ReadonlyProperties<T extends object> = Pick<T, ReadonlyPropertyNames<T>>;