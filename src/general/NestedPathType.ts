import { EventEmitter } from "stream";

import {
    ConditionalKeys,
    ConditionalKeysExact,
    ExactKeyof,
    GenericObject,
    OmitSelfReferences,
    SelfReferencingKeys,
} from "../objects";
import { TrimRight } from "../strings";
import { Any } from "./Any";
import { EqualsExact } from "./EqualsExact";
import { ExcludeExact } from "./ExcludeExact";
import { IsAny } from "./IsAny";
import { Narrow } from "./Narrow";
import { Reconstruct } from "./Reconstruct";

import type { NestedObjectPaths } from "./NestedObjectPaths";
type NullableIfNotObject<T> = Exclude<T, object> extends never ? never : undefined;
type ExtractNull<T> = Extract<T, null | undefined>
/** Preserve null values from nested objects, so that unions produce errors when indexed improperly. */
type PreserveNull<T> = ExtractNull<T> | NullableIfNotObject<T>

type PreserveNullIndex<T, K> = PreserveNull<T | T[K & ExactKeyof<T>]>

type OnlyObject<T> = Extract<T, object>;
type OptionalSep = "." | ""
type TrimSep<S extends string> = TrimRight<S, ".">

/**
 * Get the type of the element specified by the path, works in a reverse manner of {@linkcode NestedObjectPaths}.
 * 
 * **Usage notes:**
 * * Uses the same property syntax of {@linkcode NestedObjectPaths}
 * * If any types in the object tree are not a object (such as `string`), `undefined` will be introduced to the type for accuracy.
 * * If `null` or `undefined` is in the type passed to {@linkcode O}, they will be in the result.
 * * Only object properties are considered.
 *
 * @see {@linkcode NestedObjectPaths}
 * 
 * @template O The object to lookup by path from {@linkcode Path}
 * @template Path The path to lookup on {@linkcode O}
 * 
 * @example
 * type Test = NestedPathType<{ a: { b: { c: string } } }, "a.b">
 * 
 * @example
 * type Test = NestedPathType<RegExpMatchArray, "groups"> 
 * 
 * @example
 * type Test = NestedPathType<[0, 1, 2, 3], "[0]">
 */
export type NestedPathType<
	O,
	Path extends NestedObjectPaths<O>,
> = {
	[K in Path]: K extends keyof OnlyObject<O>
		? OnlyObject<O>[K] | NullableIfNotObject<O>
		: K extends `[]${ infer S }`

			// Indefinite length arrays
			? O extends any[]
				? S extends `${ OptionalSep }${ infer R extends NestedObjectPaths<OnlyObject<O[number]>> }` 
					? NestedPathType<OnlyObject<O[number]>, TrimSep<S> & R> | PreserveNullIndex<O, number>
					: O[number] | PreserveNullIndex<O, number>

				// Additional array properties such as "length"
				: S extends `${ OptionalSep }${ infer R extends Exclude<NestedObjectPaths<OnlyObject<O>>, `${ bigint }`> }` 
					? NestedPathType<OnlyObject<O>, TrimSep<S> & R> | PreserveNull<O>
					: never

			// Tuples/Fixed length arrays
			: K extends `[${ infer I extends Extract<keyof OnlyObject<O>, `${ bigint }`> }]${ infer S }`
				? S extends `${ OptionalSep }${ infer R extends NestedObjectPaths<OnlyObject<O>[I]> }`
					? NestedPathType<OnlyObject<O>[I], TrimSep<S> & R> | PreserveNullIndex<O, I & ExactKeyof<O>>
					: OnlyObject<O>[I] | PreserveNullIndex<O, I & ExactKeyof<O>>

				// Regular object properties
				: K extends `${ infer P extends Exclude<keyof O, symbol> }${ infer S }`
					? S extends `${ OptionalSep }${ infer R extends NestedObjectPaths<OnlyObject<O>[P]> }`
						? NestedPathType<OnlyObject<O>[P], TrimSep<S> & R> | PreserveNullIndex<O, P & ExactKeyof<P> & keyof O>
						: never
					: K;
}[Path];


type $2 = NestedPathType<string | [{ E: {F:"0"} | string }], "[0].E.F">;
type $3 = Reconstruct<NestedPathType<null | string | [{ E: {F:"0"}[] | string }], "[0].E[].F">>;	