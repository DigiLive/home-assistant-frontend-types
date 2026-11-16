import type { ValuePart } from "../../types";
export declare const valueFromParts: (parts: ValuePart[]) => string;
export declare const unitFromParts: (parts: ValuePart[]) => string;
export type UnitPosition = "before" | "after";
export declare const unitPosition: (parts: ValuePart[]) => UnitPosition;
