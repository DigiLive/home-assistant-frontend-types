interface CustomizableListSchemaParams {
    field: string;
    options: {
        value: string;
        label: string;
    }[];
}
export declare const customizableListSchema: ({ field, options, }: CustomizableListSchemaParams) => readonly [{
    readonly name: "customize";
    readonly selector: {
        readonly boolean: {};
    };
}, {
    readonly name: string;
    readonly visible: {
        readonly field: "customize";
        readonly value: true;
    };
    readonly selector: {
        readonly select: {
            readonly mode: "list";
            readonly reorder: true;
            readonly multiple: true;
            readonly options: {
                value: string;
                label: string;
            }[];
        };
    };
}];
export declare const customizableListData: <T extends object>(config: T, field: string) => T & {
    customize: boolean;
};
export declare const processCustomizableListValue: <T extends object>(value: T & {
    customize?: boolean;
}, field: string, defaults: readonly string[]) => T;
export {};
