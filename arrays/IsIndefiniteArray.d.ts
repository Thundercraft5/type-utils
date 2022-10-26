export type IsIndefiniteArray<T> = T extends any[] ? any[] & {
    length: number;
} extends T ? true : false : false;
//# sourceMappingURL=IsIndefiniteArray.d.ts.map