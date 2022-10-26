import { OmitSelfReferencesDeep } from "../objects/OmitSelfReferencesDeep";

import type { ExactKeyof } from "../objects";
import type { NullablePrimitive } from "../values";
/* eslint-disable @typescript-eslint/sort-type-union-intersection-members */
import type { NestedPathType } from "./NestedPathType";

type NoSymbolKeyof<T> = Exclude<ExactKeyof<T>, symbol>;
type SepIfDeep<Deep extends boolean, Sep extends string = "."> = true extends Deep ? Sep : "";

type ArrayKeys<T extends any[]> = Extract<ExactKeyof<T>, `${ bigint }`>;
type NamedArrayKeys<T extends any[]> = Exclude<ExactKeyof<T>, number | symbol | keyof typeof Array["prototype"] | `${ bigint }`>;
type StringableObjectKeys<T> = Extract<ExactKeyof<T>, number | string>;

/**
 * Gets all the nested paths of {@linkcode T}, in a standard format
 * 
 * **Usage Notes:**
 * * This type supports arrays, functions with properties, and mixed arrays of any depth.
 * * To index an array property, use the syntax of `[0]` to do so or use `.length` for named properties.
 * * Named properties are indexed like object properties (like `.prop`).
 * * To index properties of indefinite length arrays, use `[].prop` or `[][index]`.
 * * Index signatures are omitted, to allow for accuracy.
 * * Array prototype methods are omitted from results.
 * * Only object properties are considered.
 * * Circular types are not handled yet. To prevent any issues, use {@linkcode OmitSelfReferencesDeep}
 * 
 * @template T The object to get all the nested paths of
 * @template Deep *Mostly for internal use, only for preventing "." from appearing on the first layer.* Use if you want to enforce that on properties.
 * 
 * @example
 * type Test = NestedObjectPaths<{ a: { b: { c: string } } }>
 * 
 * @example
 * type Test = NestedObjectPaths<RegExpMatchArray> 
 * 
 * @example
 * type Test = NestedObjectPaths<[0, 1, 2, 3]>
 */
export type NestedObjectPaths<
	T,
	Deep extends boolean = false,
> =
	// Arrays
	T extends any[]
		? (
			number extends T["length"]
				// Indefinite length arrays
				? {
					[K in NoSymbolKeyof<Extract<T[number], object>>]: "[]" | `[]${ NestedObjectPaths<T[number], true> }`
				}[NoSymbolKeyof<Extract<T[number], object>>] | "[]"
				// Fixed length arrays
				: {
					[K in ArrayKeys<T>]: T[K] extends NullablePrimitive
						? `[${ K }]`
						: `[${ K }]` | `[${ K }]${ NestedObjectPaths<T[K], true> }`
				}[ArrayKeys<T>]
		) | {
			// Include object keys from mixed array types
			[K in NamedArrayKeys<T>]: T[K] extends NullablePrimitive
				? `${ SepIfDeep<Deep> }${ K }`
				: `${ SepIfDeep<Deep> }${ K }` | `${ SepIfDeep<Deep> }${ K }${ NestedObjectPaths<T[K], true> }`
		}[NamedArrayKeys<T>]
		// Allow "length" to be indexed
		| `${ SepIfDeep<Deep> }length`

		: T extends NullablePrimitive
			? never
			: {
				// Object types
				[K in StringableObjectKeys<T>]: T[K] extends NullablePrimitive
					? `${ SepIfDeep<Deep> }${ K }`
					: `${ SepIfDeep<Deep> }${ K }` | `${ SepIfDeep<Deep> }${ K }${ NestedObjectPaths<T[K], true> }`
			}[StringableObjectKeys<T>];

declare function getProp<O, P extends NestedObjectPaths<O>>(object: O, prop: P): NestedPathType<O, P>;

type MatchArray = Exclude<ExactKeyof<{
	[key: string]: any;
	groups?: {};
} & [0]>, number | symbol | keyof typeof Array["prototype"]>;

type $2 = NestedObjectPaths<{
	[key: string]: any;
	groups?: {}[];
} & [0]>;