interface DeepEqualOptions {
    /** Compare Symbol properties in addition to string keys */
    compareSymbols?: boolean;
    /** Treat objects with the same keys in a different order as not equal */
    compareKeyOrder?: boolean;
}
export declare const deepEqual: (a: any, b: any, options?: DeepEqualOptions) => boolean;
export {};
