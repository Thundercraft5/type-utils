/**
 * Restricts the characters of {@linkcode S} to the characters to the set of {@linkcode C}
 * 
 * @template C The characters set to restrict to
 * @template S The string to restrict
 */
export type RestrictStringChars<C extends string = string, S extends string = string> = string extends S
	? S
	: S extends ""
		? S
		: S extends `${ infer N extends C }${ infer R }`
			? `${ N }${ RestrictStringChars<C, R> }`
			: C;