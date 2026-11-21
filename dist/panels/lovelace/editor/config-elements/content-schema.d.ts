import type { LocalizeFunc } from "../../../../common/translations/localize";
export interface TileContentFormConfig {
    hide_state?: boolean;
    state_content?: string | string[];
    vertical?: boolean;
    content_layout?: string;
}
export interface BadgeContentFormConfig {
    show_name?: boolean;
    show_state?: boolean;
    show_icon?: boolean;
    state_content?: string | string[];
    displayed_elements?: string[];
}
export declare const contentLayoutSchema: (localize: LocalizeFunc) => {
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
};
export declare const displayedElementsSchema: (localize: LocalizeFunc) => {
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
};
export declare const tileContentSchema: (localize: LocalizeFunc, showTimeFormat: boolean) => {
    readonly name: "content";
    readonly flatten: true;
    readonly type: "expandable";
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
            readonly name: "color";
            readonly selector: {
                readonly ui_color: {
                    readonly default_color: "state";
                    readonly include_state: true;
                };
            };
        }, {
            readonly name: "show_entity_picture";
            readonly selector: {
                readonly boolean: {};
            };
        }, {
            readonly name: "hide_state";
            readonly selector: {
                readonly boolean: {};
            };
        }];
    }, {
        readonly name: "state_content";
        readonly visible: {
            readonly field: "hide_state";
            readonly operator: "not_eq";
            readonly value: true;
        };
        readonly selector: {
            readonly ui_state_content: {
                readonly allow_context: true;
            };
        };
        readonly context: {
            readonly filter_entity: "entity";
        };
    }, {
        readonly name: "time_format";
        readonly visible: boolean;
        readonly selector: {
            readonly ui_time_format: {};
        };
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
export declare const badgeContentSchema: (localize: LocalizeFunc, showTimeFormat: boolean) => {
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
            readonly name: "color";
            readonly selector: {
                readonly ui_color: {
                    readonly default_color: "state";
                    readonly include_state: true;
                };
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
            readonly name: "show_entity_picture";
            readonly selector: {
                readonly boolean: {};
            };
        }];
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
    }, {
        readonly name: "state_content";
        readonly selector: {
            readonly ui_state_content: {
                readonly allow_name: true;
            };
        };
        readonly context: {
            readonly filter_entity: "entity";
        };
    }, {
        readonly name: "time_format";
        readonly visible: boolean;
        readonly selector: {
            readonly ui_time_format: {};
        };
    }];
};
export declare const tileContentFormData: <T extends TileContentFormConfig>(config: T) => T;
export declare const tileContentConfigFromForm: <T extends TileContentFormConfig>(value: T) => T;
export declare const badgeContentFormData: <T extends BadgeContentFormConfig>(config: T) => T;
export declare const badgeContentConfigFromForm: <T extends BadgeContentFormConfig>(value: T) => T;
