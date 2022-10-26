export type Split<
	S extends string,
	Delimiter extends string,
> = S extends `${ infer Head }${ Delimiter }${ infer Tail }`
	? [Head, ...Split<Tail, Delimiter>]
	: S extends Delimiter
		? []
		: [S];