export type ValueOf<O extends {}, V extends keyof O = keyof O> = O[V];
