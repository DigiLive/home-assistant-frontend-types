import type { LocalizeFunc } from "../../../../common/translations/localize";
export declare const alertSchema: () => {
    readonly name: "alert";
    readonly type: "expandable";
    readonly flatten: true;
    readonly iconPath: string;
    readonly schema: readonly [{
        readonly name: "";
        readonly type: "grid";
        readonly schema: readonly [{
            readonly name: "clear_color";
            readonly selector: {
                readonly ui_color: {
                    readonly include_none: true;
                    readonly include_state: true;
                    readonly default_color: "none";
                };
            };
        }, {
            readonly name: "alert_color";
            readonly selector: {
                readonly ui_color: {
                    readonly include_none: true;
                    readonly include_state: true;
                    readonly default_color: "state";
                };
            };
        }];
    }, {
        readonly name: "pulse";
        readonly selector: {
            readonly boolean: {};
        };
    }];
};
export declare const alertCardContentSchema: (localize: LocalizeFunc) => {
    readonly name: "content";
    readonly type: "expandable";
    readonly flatten: true;
    readonly iconPath: string;
    readonly schema: readonly [{
        readonly name: "name";
        readonly selector: {
            readonly entity_name: {};
        };
        readonly context: {
            readonly entity: "entity";
        };
    }, {
        readonly name: "";
        readonly type: "grid";
        readonly schema: readonly [{
            readonly name: "icon";
            readonly selector: {
                readonly icon: {};
            };
            readonly context: {
                readonly icon_entity: "entity";
            };
        }, {
            readonly name: "hide_state";
            readonly selector: {
                readonly boolean: {};
            };
        }];
    }, {
        readonly name: "content_layout";
        readonly required: true;
        readonly selector: {
            readonly select: {
                readonly mode: "box";
                readonly options: {
                    label: string;
                    value: string;
                    image: {
                        src: string;
                        src_dark: string;
                        flip_rtl: boolean;
                    };
                }[];
            };
        };
    }];
};
export declare const alertBadgeContentSchema: (localize: LocalizeFunc) => {
    readonly name: "content";
    readonly type: "expandable";
    readonly flatten: true;
    readonly iconPath: string;
    readonly schema: readonly [{
        readonly name: "name";
        readonly selector: {
            readonly entity_name: {};
        };
        readonly context: {
            readonly entity: "entity";
        };
    }, {
        readonly name: "icon";
        readonly selector: {
            readonly icon: {};
        };
        readonly context: {
            readonly icon_entity: "entity";
        };
    }, {
        readonly name: "displayed_elements";
        readonly selector: {
            readonly select: {
                readonly mode: "list";
                readonly multiple: true;
                readonly options: {
                    value: "icon" | "name" | "state";
                    label: string;
                }[];
            };
        };
    }];
};
