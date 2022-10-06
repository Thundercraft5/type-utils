import type { ForbidWide } from "./ForbidWide";
import type { BoundedNarrow } from "./Narrow";
/**
 * @example
 * // For an unbound generic type
 * import { AlwaysNarrow } from "@thundercraft5/type-utils";
 *
 * function test<T>(test: AlwaysNarrow<T>) {
 * 	// ...
 * }
 *
 * @example
 * // For a constrained generic type
 * import { AlwaysNarrow, ForbidWide } from "@thundercraft5/type-utils";
 *
 * function test<T extends { option: string }>({ option }: AlwaysNarrow<T> = {} as ForbidWide<T>) {
 * 	// ...
 * }
 */
export type AlwaysNarrow<T, B = any> = BoundedNarrow<T, B> & ForbidWide<T>;
//# sourceMappingURL=AlwayNarrow.d.ts.map