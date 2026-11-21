import type { LocalizeFunc } from "../../../common/translations/localize";
/**
 * Static check on editor elements, returns an error when the config can't be
 * edited in the visual editor. Must not depend on element state.
 */
export type CheckUiSupport<T = any> = (localize: LocalizeFunc, config: T) => Error | undefined;
/** YAML can parse to scalars like `null`, which are never valid configs */
export declare const isConfigObject: (value: unknown) => value is Record<string, unknown>;
export declare const checkElementUiSupport: (localize: LocalizeFunc, elementName: string, config: unknown) => Error | undefined;
export declare const getUiSupportWarnings: (localize: LocalizeFunc, elementName: string, config: unknown) => string[] | undefined;
