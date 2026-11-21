import type { HaFormSchema } from "./types";
interface ComputeInitialHaFormDataOptions {
    skipUnsupportedSelectors?: boolean;
}
export declare const computeInitialHaFormData: (schema: HaFormSchema[] | readonly HaFormSchema[], options?: ComputeInitialHaFormDataOptions) => Record<string, any>;
export {};
