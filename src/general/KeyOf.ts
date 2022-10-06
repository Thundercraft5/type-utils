import type { Enumerate } from "../numbers";

export type KeyOf<T> = T extends any[] ? Enumerate<T["length"]> : keyof T;