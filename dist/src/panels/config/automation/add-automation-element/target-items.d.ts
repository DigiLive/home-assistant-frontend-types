import type { LocalizeFunc } from "../../../../common/translations/localize";
import { type SingleHassServiceTarget } from "../../../../data/target";
import type { HomeAssistant } from "../../../../types";
import { type DomainClassificationOptions } from "./domain-classification";
import type { AddAutomationElementListItem, AddElementType, ElementSources, ItemsSection } from "./types";
export declare const fetchTargetElementKeys: (callWS: HomeAssistant["callWS"], type: AddElementType, target: SingleHassServiceTarget) => Promise<string[]>;
export declare const sortDomainsByCollection: (type: AddElementType, entries: [string, ItemsSection][], language: string, getGroupKey: (domain: string) => string) => ItemsSection[];
export declare const getDefaultStateItems: (type: "trigger" | "condition", localize: LocalizeFunc, entityId: string | undefined, states: HomeAssistant["states"]) => AddAutomationElementListItem[];
export declare const getTargetSections: (sources: ElementSources, target: SingleHassServiceTarget, keys: string[], states: HomeAssistant["states"], classification: DomainClassificationOptions) => ItemsSection[];
