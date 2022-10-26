import type { ExactKeyof } from "../objects";
import type { RemoveArrayIndexSignature } from "./RemoveArrayIndexSignature";

export type RemoveMixedArrayIndexSignature<O extends { [key: number]: unknown; length: number }> = RemoveArrayIndexSignature<O> & {
	[K in Exclude<ExactKeyof<O>, keyof typeof Array["prototype"] | `${ bigint }`>]: O[K];
};