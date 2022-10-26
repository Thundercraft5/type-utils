import type { IsIndefiniteArray } from "../arrays";
import type { IsAny } from "../general";
type ExcludeAny<T> = IsAny<T> extends true ? never : T;
type Omittable = bigint | boolean | number | string | symbol | null | undefined;
export type OmitSelfReferencesDeep<T, Seen = T> = [
    T
] extends [Omittable] ? T : T extends Function ? T & {
    [K in keyof T]: Seen extends T[K] ? never : OmitSelfReferencesDeep<T[K], Exclude<T[K], Omittable> | Seen>;
} : IsIndefiniteArray<T> extends true ? OmitSelfReferencesDeep<Exclude<T[Extract<keyof T, number | `${number}`>], Seen>, Seen | T[Extract<keyof T, number | `${number}`>]>[] : {
    [K in keyof T]: NonNullable<ExcludeAny<T[K]>> extends Seen ? never : OmitSelfReferencesDeep<T[K], Exclude<T[K], Omittable> | Seen>;
};
export {};
//# sourceMappingURL=OmitSelfReferencesDeep.d.ts.map