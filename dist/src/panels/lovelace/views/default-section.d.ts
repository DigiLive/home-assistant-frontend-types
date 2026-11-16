import type { LocalizeFunc } from "../../../common/translations/localize";
export declare const generateDefaultSection: (localize: LocalizeFunc, includeHeading?: boolean) => {
    type: string;
    cards: {
        type: string;
        heading: string;
    }[];
};
