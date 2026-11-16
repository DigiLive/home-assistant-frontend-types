export declare const COLORS_COUNT = 54;
export declare function getColorByIndex(index: number, style: CSSStyleDeclaration): string;
export declare function getGraphColorByIndex(index: number, style: CSSStyleDeclaration): string;
export declare const getAllGraphColors: import("memoize-one").MemoizedFn<(style: CSSStyleDeclaration) => string[]>;
