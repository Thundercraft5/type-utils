import type { OptionalPropertyNames } from "./OptionalPropertyNames";

export type OptionalProperties<T extends object> = Pick<T, OptionalPropertyNames<T>>;