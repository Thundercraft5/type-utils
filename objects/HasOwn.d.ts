import type { MakeRequired } from "./MakeRequired";
import type { ObjectKey } from "./ObjectKey";
export type HasOwn<T extends object, K extends ObjectKey> = K extends keyof T ? MakeRequired<T, K> : never;
//# sourceMappingURL=HasOwn.d.ts.map