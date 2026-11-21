export declare const tileInteractionsSchema: (entityId: string | undefined) => {
    readonly name: "interactions";
    readonly type: "expandable";
    readonly flatten: true;
    readonly iconPath: string;
    readonly schema: readonly [{
        readonly name: "tap_action";
        readonly selector: {
            readonly ui_action: {
                readonly default_action: "more-info";
            };
        };
        readonly context: {
            readonly entity_id: "entity";
            readonly area_id: "area";
        };
    }, {
        readonly name: "";
        readonly type: "divider";
    }, {
        readonly name: "icon_tap_action";
        readonly selector: {
            readonly ui_action: {
                readonly default_action: "more-info" | "none" | "toggle";
            };
        };
        readonly context: {
            readonly entity_id: "entity";
            readonly area_id: "area";
        };
    }, {
        readonly name: "";
        readonly type: "optional_actions";
        readonly flatten: true;
        readonly schema: {
            name: "double_tap_action" | "hold_action" | "icon_double_tap_action" | "icon_hold_action";
            selector: {
                ui_action: {
                    default_action: "none";
                };
            };
            context: {
                readonly entity_id: "entity";
                readonly area_id: "area";
            };
        }[];
    }];
};
export declare const entityInteractionsSchema: () => {
    readonly name: "interactions";
    readonly type: "expandable";
    readonly flatten: true;
    readonly iconPath: string;
    readonly schema: readonly [{
        readonly name: "tap_action";
        readonly selector: {
            readonly ui_action: {
                readonly default_action: "more-info";
            };
        };
        readonly context: {
            readonly entity_id: "entity";
            readonly area_id: "area";
        };
    }, {
        readonly name: "";
        readonly type: "optional_actions";
        readonly flatten: true;
        readonly schema: {
            name: "double_tap_action" | "hold_action";
            selector: {
                ui_action: {
                    default_action: "none";
                };
            };
            context: {
                readonly entity_id: "entity";
                readonly area_id: "area";
            };
        }[];
    }];
};
