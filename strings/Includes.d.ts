import "rxjs/operators";
import type { Split } from "./Split";
export type Includes<S extends string, S2 extends string> = Split<S, S2>["length"] extends 1 ? false : true;
//# sourceMappingURL=Includes.d.ts.map