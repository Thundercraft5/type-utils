import type { PrependNextNum } from "./PrependNextNum";
export declare type EnumerateInternal<A extends unknown[], N extends number> = {
    0: A;
    1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A["length"] ? 0 : 1];
//# sourceMappingURL=EnumerateInternal.d.ts.map