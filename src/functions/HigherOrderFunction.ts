export type HigherOrderFunction<R = any> = ((...args: any[]) => (HigherOrderFunction<R> | R));
