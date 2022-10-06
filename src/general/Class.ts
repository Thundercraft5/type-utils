import type { AbstractConstructor } from "../constructors";
import type { Reconstruct } from "./Reconstruct";

export type Class = AbstractConstructor & Function & { prototype: { [key: string]: any } };