import type { ExtractKeys } from "./ExtractKeys";

export type ExtractMembers<T extends object, U> = Pick<T, ExtractKeys<T, U>>;