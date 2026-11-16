import type { HaFormCondition, HaFormDataContainer, HaFormSchema, HaFormVisible } from "./types";
export declare const evaluateCondition: (condition: HaFormCondition, data: HaFormDataContainer | undefined) => boolean;
export declare const isVisible: (visible: HaFormVisible | undefined, data: HaFormDataContainer | undefined) => boolean;
export declare const combineVisible: (...options: (HaFormVisible | undefined)[]) => HaFormVisible;
export declare const getHiddenFields: (fields: readonly (readonly [string, HaFormVisible | undefined])[], data: HaFormDataContainer | undefined) => Set<string>;
export declare const getHiddenSchemaFields: (schema: readonly HaFormSchema[], data: HaFormDataContainer | undefined) => Set<string>;
