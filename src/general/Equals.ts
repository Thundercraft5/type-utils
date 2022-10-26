import type { EqualsExact } from "./EqualsExact";

export type Equals<A, B, Exact extends boolean = false> = Exact extends true
	? EqualsExact<A, B>
	: A extends B
		? true
		: false;