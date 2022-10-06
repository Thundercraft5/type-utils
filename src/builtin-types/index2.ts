type ObjectKey = number | string | symbol;
type Primitive = ObjectKey | null | undefined;

type GenericObject = { [key: ObjectKey]: unknown };
type NoSymbolKeyof<T> = Exclude<keyof T, symbol>;
type SepIfDeep<Deep extends boolean, Sep extends string = "."> = true extends Deep ? Sep : "";
export type NestedPaths<
	T,
	Deep extends boolean = false,
> = T extends any[]
	? number extends T["length"]
	 	? {
			[K in NoSymbolKeyof<T[number]>]: "[]" | `[]${ NestedPaths<T[number], true> }`
		}[NoSymbolKeyof<T[number]>]
		: {
			[K in Extract<keyof T, `${ number }`>]: T extends Primitive
				? `[${ K }]`
				: `[${ K }]` | `[${ K }]${ NestedPaths<T[K], true> }`
		}[Extract<keyof T, `${ number }`>]
	: T extends Primitive
		? never
		: {
			[K in Extract<keyof T, number | string>]: T[K] extends Primitive
				? `${ SepIfDeep<Deep, "."> }${ K }`
				: `${ SepIfDeep<Deep, "."> }${ K }` | `${ SepIfDeep<Deep, "."> }${ K }${ NestedPaths<T[K], true> }`
		}[Extract<keyof T, number | string>];

type $Path = State;
type Paths = NestedPaths<State>;
type State = { k: [[[[() => "0"]][]]][] };
type Resolved = TypeFromPath<State, "k[][0][0][][0][0]">;

type;

function watch<O, P extends NestedPaths<O>>(object: O, path: P): TypeFromPath<O, P> { return null as any; }

/**
 * TypeFromPath
 * Get the type of the element specified by the path
 * @example
 * type TypeOfAB = TypeFromPath<{ a: { b: { c: string } }, 'a.b'>
 * // { c: string }
 */
export type TypeFromPath<
	T,
	Path extends NestedPaths<T>, // Or, if you prefer, NestedPaths<T>
> = {
	[K in Path]: K extends keyof T
		? T[K]
		: K extends `[]${ infer S }` // Indefinite length arrays
			? T extends any[]
				? S extends `${ "." | "" }${ infer R extends NestedPaths<T[number]> }` ? TypeFromPath<T[number], R> : T[number]
				: never
			: K extends `[${ infer I extends Extract<keyof T, `${ number }`> }]${ infer S }` // Tuples/Fixed length arrays
				? S extends `${ "." | "" }${ infer R extends NestedPaths<T[I]> }`
					? TypeFromPath<T[I], R>
					: T[I]
				: K extends `${ infer P extends NoSymbolKeyof<T> }${ infer S }` // Regular object properties
					? S extends NestedPaths<T[P]>
						? TypeFromPath<T[P], S>
						: never
					: never;

}[Path];