import type { Numeric } from "./Numeric";
export type IsPositive<T extends Numeric> = `${T}` extends `-${Numeric}` ? false : true;
//# sourceMappingURL=IsPositive.d.ts.map