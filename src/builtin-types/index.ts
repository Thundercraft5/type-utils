/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

import type { Reconstruct } from "../general";
import type { HasOwn, ObjectEntries, ValueOf } from "../objects";

interface ArrayExtensions<T> {
	length: number;
}


declare global {
	interface Array<T> extends ArrayExtensions<T> {}
	interface ReadonlyArray<T> extends ArrayExtensions<T> {}

	interface ObjectConstructor {
		entries<O extends object>(object: O): ObjectEntries<O>[];
		keys<O extends object>(object: O): (keyof O)[];
		values<O extends object>(object: O): ValueOf<O>;
		hasOwn<O extends object, K extends keyof O>(object: O, key: K): object is HasOwn<O, K>;
		hasOwn<O extends object, K extends Exclude<string, keyof O>>(object: O, key: K): object is (keyof O extends K ? O : never);
	}
}

// From https://stackoverflow.com/a/50375286
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

// From: https://stackoverflow.com/a/53955431
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;


type LastOf<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never;
// TS4.0+
type Push<T extends any[], V> = [...T, V];
// TS4.1+
type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
	true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;
  type FirstOf<T extends any[]> = T extends [infer F, ...infer R] ? F : never;
type TruncateUnion<T, N extends number = 0> = Exclude<FirstOf<TuplifyUnion<T>>, undefined> & string;
type TruncateObject<T extends object> = Omit<T, Exclude<keyof T, TruncateUnion<keyof T> & keyof T>>;
type Equals<A, B> = A extends B ? B extends A ? A : B : B;
type TruncateObjectStrict<T> = Equals<T, Reconstruct<Omit<T, Exclude<keyof T, TruncateUnion<keyof T> & keyof T>>>>;

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    {
    	[K in Keys]-?:
    	Partial<Record<Exclude<Keys, K>, undefined>> & Required<Pick<T, K>>
    }[Keys] & Pick<T, Exclude<keyof T, Keys>>;


// Usage:
function nameof<T extends object>(nameObject: TruncateObjectStrict<T>) {
	if (typeof nameObject !== "object") throw new TypeError(`Type of parameter 'nameObject' should be "object", recieved type "${ typeof nameObject }" ('${ String(nameObject) }').\nCorrect usage: nameof({ variable }) -> "variable\"`);
	const keys = Object.keys(nameObject);

	if (keys.length !== 1) throw new TypeError("Object supplied to `nameof({ ... })` must have exactly one key.");

	return keys[0] as TruncateUnion<keyof T>;
}

const E = "0",
	name = nameof({ F: "0" });