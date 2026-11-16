export interface GradientStop {
    offset: number;
    color: string;
}
export declare const getAbsoluteGradient: (min: number, max: number, nStops?: number) => GradientStop[];
export declare const getRelativeGradient: (min: number, max: number, nStops?: number) => GradientStop[];
