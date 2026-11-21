export declare function computeYAxisFractionDigits(min: number, max: number, includeZero?: boolean): number;
interface YAxisExtentValues {
    min: number;
    max: number;
}
type YAxisBound = number | ((values: YAxisExtentValues) => number | undefined) | undefined;
export declare function createYAxisPrecisionBounds(options: {
    min?: YAxisBound;
    max?: YAxisBound;
    includeZero?: boolean;
    unit?: string;
    onFractionDigits: (digits: number) => void;
}): {
    min: (values: YAxisExtentValues) => number | undefined;
    max: (values: YAxisExtentValues) => number | undefined;
    boundaryGap: [number, number];
    splitNumber: number;
};
export {};
