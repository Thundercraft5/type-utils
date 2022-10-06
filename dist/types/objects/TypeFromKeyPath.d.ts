import type { GenericObject } from "./GenericObject";
import type { ObjectKey } from "./ObjectKey";
type Join<L extends ObjectKey | undefined, R extends ObjectKey | undefined> = L extends number | string ? R extends number | string ? `${L}.${R}` : L : R extends number | string ? R : undefined;
type Union<L extends unknown | undefined, R extends unknown | undefined> = L extends undefined ? R extends undefined ? undefined : R : R extends undefined ? L : L | R;
/**
 * Get all the possible paths of an object
 * @example
 * type Keys = NestedPaths<{ a: { b: { c: string } }>
 * // 'a' | 'a.b' | 'a.b.c'
 */
export type NestedObjectPaths<O extends GenericObject, Prev extends ObjectKey | undefined = undefined, Path extends ObjectKey | undefined = undefined> = {
    [K in keyof O]: O[K] extends GenericObject ? NestedObjectPaths<O[K], Union<Prev, Path>, Join<Path, K>> : Union<Union<Prev, Path>, Join<Path, K>>;
}[keyof O];
/**
 * Get the type of the element specified by the path
 * @example
 * type TypeOfAB = ValueFromNestedPath<{ a: { b: { c: string } }, 'a.b'>
 * // { c: string }
 */
export type ValueFromNestedPath<O extends GenericObject, Path extends NestedObjectPaths<O>> = {
    [K in Path]: K extends keyof O ? O[K] : K extends `${infer P}.${infer S}` ? O[P] extends GenericObject ? ValueFromNestedPath<O[P], S> : never : never;
}[Path];
export {};
//# sourceMappingURL=TypeFromKeyPath.d.ts.map