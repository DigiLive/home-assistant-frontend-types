import type { EntityRegistryEntry } from "../../../../data/entity/entity_registry";
import type { SceneConfig } from "../../../../data/scene";
export declare const loadSceneSaveDialog: () => Promise<typeof import("./dialog-scene-save")>;
interface BaseRenameDialogParams {
    entityRegistryUpdate?: EntityRegistryUpdate;
    entityRegistryEntry?: EntityRegistryEntry;
    onClose?: () => void;
    onDiscard?: () => void;
    saveText?: string;
    description?: string;
    title?: string;
    hideInputs?: boolean;
}
export interface EntityRegistryUpdate {
    area: string;
    labels: string[];
    category: string;
}
export interface SceneSaveDialogParams extends BaseRenameDialogParams {
    config: SceneConfig;
    domain: "scene";
    updateConfig: (config: SceneConfig, entityRegistryUpdate: EntityRegistryUpdate) => Promise<void>;
}
export declare const showSceneSaveDialog: (element: HTMLElement, dialogParams: SceneSaveDialogParams) => void;
export {};
