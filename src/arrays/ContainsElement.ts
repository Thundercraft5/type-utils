export type ContainsElement<A extends any[], E> = E extends A[number] ? true : false;