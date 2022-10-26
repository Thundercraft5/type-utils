import type { Narrow, NestedObjectPaths, NestedPathType, Reconstruct } from "../general";

type $2 = NestedObjectPaths<{ E: ["0" ] }>;

function watch<O, P extends NestedObjectPaths<O>>(object: O, path: P): NestedPathType<O, P> {
	return null as any;
}

watch({ E: ["0" ] }, "E[]");