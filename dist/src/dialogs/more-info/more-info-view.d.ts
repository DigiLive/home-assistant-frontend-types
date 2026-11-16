export declare const MORE_INFO_VIEWS: readonly ["info", "history", "settings", "related", "add_to", "details"];
export type MoreInfoView = (typeof MORE_INFO_VIEWS)[number];
export declare const isMoreInfoView: (value: string | undefined) => value is MoreInfoView;
