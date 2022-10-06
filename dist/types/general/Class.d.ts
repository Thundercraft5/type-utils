import type { AbstractConstructor } from "../constructors";
export type Class = AbstractConstructor & Function & {
    prototype: {
        [key: string]: any;
    };
};
//# sourceMappingURL=Class.d.ts.map