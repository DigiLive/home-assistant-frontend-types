import type { TemplateResult } from "lit";
import type { HaFormSchema } from "../../components/ha-form/types";
import type { DataEntryFlowStep, DataEntryFlowStepAbort, DataEntryFlowStepCreateEntry, DataEntryFlowStepExternal, DataEntryFlowStepForm, DataEntryFlowStepMenu, DataEntryFlowStepProgress, FlowType } from "../../data/data_entry_flow";
import type { IntegrationManifest } from "../../data/integration";
import type { HomeAssistant } from "../../types";
export interface FlowConfig {
    flowType: FlowType;
    showDevices: boolean;
    createFlow(hass: HomeAssistant, handler: string): Promise<DataEntryFlowStep>;
    fetchFlow(hass: HomeAssistant, flowId: string): Promise<DataEntryFlowStep>;
    handleFlowStep(hass: HomeAssistant, flowId: string, data: Record<string, any>): Promise<DataEntryFlowStep>;
    deleteFlow(hass: HomeAssistant, flowId: string): Promise<unknown>;
    renderAbortHeader?(hass: HomeAssistant, step: DataEntryFlowStepAbort): string;
    renderAbortSubheader?(hass: HomeAssistant, step: DataEntryFlowStepAbort): string | TemplateResult;
    renderAbortDescription(hass: HomeAssistant, step: DataEntryFlowStepAbort): TemplateResult | string;
    renderShowFormStepHeader(hass: HomeAssistant, step: DataEntryFlowStepForm): string;
    renderShowFormStepSubheader?(hass: HomeAssistant, step: DataEntryFlowStepForm): string | TemplateResult;
    renderShowFormStepDescription(hass: HomeAssistant, step: DataEntryFlowStepForm): TemplateResult | "";
    renderShowFormStepFieldLabel(hass: HomeAssistant, step: DataEntryFlowStepForm, field: HaFormSchema, options: {
        path?: string[];
        [key: string]: any;
    }): string;
    renderShowFormStepFieldHelper(hass: HomeAssistant, step: DataEntryFlowStepForm, field: HaFormSchema, options: {
        path?: string[];
        [key: string]: any;
    }): TemplateResult | string;
    renderShowFormStepFieldError(hass: HomeAssistant, step: DataEntryFlowStepForm, error: string): string;
    renderShowFormStepFieldLocalizeValue(hass: HomeAssistant, step: DataEntryFlowStepForm, key: string): string;
    renderShowFormStepSubmitButton(hass: HomeAssistant, step: DataEntryFlowStepForm): string;
    renderExternalStepHeader(hass: HomeAssistant, step: DataEntryFlowStepExternal): string;
    renderExternalStepDescription(hass: HomeAssistant, step: DataEntryFlowStepExternal): TemplateResult | "";
    renderCreateEntryDescription(hass: HomeAssistant, step: DataEntryFlowStepCreateEntry): TemplateResult | "";
    renderShowFormProgressHeader(hass: HomeAssistant, step: DataEntryFlowStepProgress): string;
    renderShowFormProgressSubheader?(hass: HomeAssistant, step: DataEntryFlowStepProgress): string | TemplateResult;
    renderShowFormProgressDescription(hass: HomeAssistant, step: DataEntryFlowStepProgress): TemplateResult | "";
    renderMenuHeader(hass: HomeAssistant, step: DataEntryFlowStepMenu): string;
    renderMenuSubheader?(hass: HomeAssistant, step: DataEntryFlowStepMenu): string | TemplateResult;
    renderMenuDescription(hass: HomeAssistant, step: DataEntryFlowStepMenu): TemplateResult | "";
    renderMenuOption(hass: HomeAssistant, step: DataEntryFlowStepMenu, option: string): string;
    renderLoadingDescription(hass: HomeAssistant, loadingReason: LoadingReason, handler?: string, step?: DataEntryFlowStep | null): string;
}
export type LoadingReason = "loading_handlers" | "loading_flow" | "loading_step";
export interface DataEntryFlowDialogParams {
    startFlowHandler?: string;
    searchQuery?: string;
    continueFlowId?: string;
    manifest?: IntegrationManifest | null;
    domain?: string;
    dialogClosedCallback?: (params: {
        flowFinished: boolean;
        entryId?: string;
    }) => void;
    flowConfig: FlowConfig;
    showAdvanced?: boolean;
    dialogParentElement?: HTMLElement;
    navigateToResult?: boolean;
}
export declare const loadDataEntryFlowDialog: () => Promise<typeof import("./dialog-data-entry-flow")>;
export declare const showFlowDialog: (element: HTMLElement, dialogParams: Omit<DataEntryFlowDialogParams, "flowConfig">, flowConfig: FlowConfig) => void;
