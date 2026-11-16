import type { LocalizeFunc } from "../translations/localize";
export declare const handleStructError: (localize: LocalizeFunc, err: Error) => {
    warnings: string[];
    errors?: string[];
};
