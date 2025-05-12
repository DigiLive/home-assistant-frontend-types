import type { CSSResult } from "lit";
export declare const extractVar: (css: CSSResult, varName: string) => string;
export declare const extractVars: (css: CSSResult) => Record<string, string>;
export declare const extractDerivedVars: (css: CSSResult) => Record<string, string>;
