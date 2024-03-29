/* eslint-disable @typescript-eslint/indent */
export type TypeOf<T> =
	T extends Function
		? "function"
	: T extends string
		? "string"
	: T extends number
		? "number"
	: T extends boolean
		? "boolean"
	: T extends symbol
		? "symbol"
	: T extends bigint
		? "bigint"
	: T extends undefined
		? "undefined"
	: T extends object | null
		? "object"
	: never;