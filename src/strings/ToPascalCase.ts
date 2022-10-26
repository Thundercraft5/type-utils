/**
 * @see {@linkcode https://github.com/ts-essentials/ts-essentials/blob/e0307a2e54bb6ae55666dfe434f840ccfc04e0c5/lib/literal-types/index.ts#L5 WordInCamelCase}
 */
export type WordInCamelCase<T, Ch extends string = ""> = T extends `${ Ch }${ infer NextCh }${ infer _ }`
	? NextCh extends Capitalize<NextCh>
		? Ch
		: WordInCamelCase<T, `${ Ch }${ NextCh }`>
	: Ch;