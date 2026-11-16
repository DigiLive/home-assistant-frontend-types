import type { IntegrationManifest } from "../../../data/integration";
import type { IntegrationFilter } from "../../../data/integrations";
export interface AddIntegrationDialogParams {
    brand?: string;
    domain?: string;
    initialFilter?: string;
    integrationFilter?: IntegrationFilter;
    navigateToResult?: boolean;
}
export interface YamlIntegrationDialogParams {
    manifest: IntegrationManifest;
}
export declare const showAddIntegrationDialog: (element: HTMLElement, dialogParams?: AddIntegrationDialogParams) => void;
export declare const showYamlIntegrationDialog: (element: HTMLElement, dialogParams?: YamlIntegrationDialogParams) => void;
