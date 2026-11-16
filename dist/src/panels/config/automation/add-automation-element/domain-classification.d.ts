import type { LocalizeFunc } from "../../../../common/translations/localize";
import "../../../../components/ha-domain-icon";
import type { ConditionDescriptions } from "../../../../data/condition";
import type { DomainManifestLookup } from "../../../../data/integration";
import type { TriggerDescriptions } from "../../../../data/trigger";
import type { HomeAssistant } from "../../../../types";
import type { AddAutomationElementListItem, AddElementType, CollectionGroupType, SystemDomains } from "./types";
export interface DomainClassificationOptions {
    type: AddElementType;
    usedDomains?: Set<string>;
    activeSystemDomains?: Set<string>;
}
export declare const classifyDomain: (domain: string, manifest: DomainManifestLookup[string] | undefined, options: DomainClassificationOptions) => CollectionGroupType | undefined;
export declare const getDomainGroupKey: (domain: string, manifests: DomainManifestLookup | undefined, options: DomainClassificationOptions) => "helpers" | "integrationGroups" | "dynamicGroups";
export declare const calculateActiveSystemDomains: (descriptions: TriggerDescriptions | ConditionDescriptions, manifests: DomainManifestLookup, getDomain: (key: string) => string, states: HomeAssistant["states"], entities: HomeAssistant["entities"], devices: HomeAssistant["devices"]) => SystemDomains;
export declare const getDynamicDomainGroups: (localize: LocalizeFunc, language: string, domains: string[], manifests: DomainManifestLookup | undefined, types: CollectionGroupType[], options: DomainClassificationOptions & {
    exclusiveDomains?: Set<string>;
}) => AddAutomationElementListItem[];
