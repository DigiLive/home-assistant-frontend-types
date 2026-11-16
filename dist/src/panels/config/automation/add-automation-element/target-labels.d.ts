import type { DomainManifestLookup } from "../../../../data/integration";
import type { LabelRegistryEntry } from "../../../../data/label/label_registry";
import type { SingleHassServiceTarget } from "../../../../data/target";
import type { HomeAssistant, HomeAssistantInternationalization, HomeAssistantRegistries } from "../../../../types";
export interface TargetLabelSources {
    i18n: HomeAssistantInternationalization;
    registries: HomeAssistantRegistries;
    states: HomeAssistant["states"];
    manifests?: DomainManifestLookup;
    getLabel: (id: string) => LabelRegistryEntry | undefined;
}
export declare const extractTypeAndIdFromTarget: (target: SingleHassServiceTarget) => [string, string | undefined];
export declare const isTargetWithId: (target?: SingleHassServiceTarget) => boolean;
export declare const getSelectedTargetLabel: ({ i18n, registries, states, manifests, getLabel }: TargetLabelSources, target: SingleHassServiceTarget) => string | undefined;
export declare const getTargetSubtitle: ({ i18n, registries, states, manifests }: TargetLabelSources, target: SingleHassServiceTarget) => string | undefined;
export declare const isTargetTreeHidden: (registries: HomeAssistantRegistries, target: SingleHassServiceTarget) => boolean;
