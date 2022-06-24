import type { ObjectKey } from ".";
import type { Any } from "./Any";
/**
 * The purpose of this type is to prevent widening of inferred types in generic parameters.
 * It will work on objects of any depth, arrays or objects.
 *
 * Example:
 * ```ts
 * class Test<O extends { [key: string]: string }> {
 * 	constructor(object: Capture<O>) {
 * 		// ...
 * 	}
 * }
 *
 * // Type will be `Test<{ item: "test" }>`
 * const value = new Test({
 * 	item: "test"
 * })
 * ```
 */
export declare type Capture<O extends Any = {}> = {
    [K in keyof O]: O[K] extends Any[] ? [...O[K]] : O[K] extends {
        [key: ObjectKey]: Any;
    } ? Capture<O[K]> : O[K];
};
//# sourceMappingURL=Capture.d.ts.map