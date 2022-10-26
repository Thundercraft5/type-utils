import type { HasOwn, ObjectEntries, ValueOf } from "../objects";
interface ArrayExtensions<T> {
    length: number;
}
declare global {
    interface Array<T> extends ArrayExtensions<T> {
    }
    interface ReadonlyArray<T> extends ArrayExtensions<T> {
    }
    interface ObjectConstructor {
        entries<O extends object>(object: O): ObjectEntries<O>[];
        keys<O extends object>(object: O): (keyof O)[];
        values<O extends object>(object: O): ValueOf<O>;
        hasOwn<O extends object, K extends keyof O>(object: O, key: K): object is HasOwn<O, K>;
        hasOwn<O extends object, K extends Exclude<string, keyof O>>(object: O, key: K): object is (keyof O extends K ? O : never);
    }
}
export {};
//# sourceMappingURL=index.d.ts.map