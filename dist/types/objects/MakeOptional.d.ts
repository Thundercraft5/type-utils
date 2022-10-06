import type { Optional } from "./Optional";
export type MakeOptional<O extends object, K extends keyof O = keyof O> = Optional<O, K> & Pick<O, Exclude<keyof O, K>>;
//# sourceMappingURL=MakeOptional.d.ts.map