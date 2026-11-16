import { nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import type { DataTableColumnData } from "../../../../components/data-table/ha-data-table";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import "./expose-assistant-icon";
export declare function getAssistantsTableColumn<T>(localize: LocalizeFunc, hass: HomeAssistant, availableAssistants: string[], entitiesToCheck?: any[], supportedEntities?: Record<"cloud.google_assistant" | "cloud.alexa" | "conversation", string[] | undefined>, visible?: boolean): DataTableColumnData<T>;
export declare const getAssistantsTableColumnIcon: (id: string, show: boolean, vaId: string, hass: HomeAssistant, entitiesToCheck?: any[], manual?: boolean, unsupported?: boolean) => typeof nothing | import("lit-html").TemplateResult<1>;
export declare const getAssistantsSortableKey: (entityAssistants: string[]) => string | undefined;
