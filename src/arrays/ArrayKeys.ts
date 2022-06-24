import { Enumerate } from "../numbers";


export type ArrayKeys<A extends any[] = []> = Enumerate<A["length"]>;
