import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-svg-icon";
declare class HaPanelDevStateRenderer extends LitElement {
    entities: HassEntity[];
    narrow: boolean;
    virtualize: boolean;
    showAttributes: boolean;
    showDevice: boolean;
    showArea: boolean;
    private _i18n;
    private _registries;
    private _formatEntityName;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult<1>;
    private _renderStateItem;
    private _formatAttributeValue;
    private _attributeString;
    private _copyEntity;
    private _entityMoreInfo;
    private _entitySelected;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "tools-state-renderer": HaPanelDevStateRenderer;
    }
    interface HASSDomEvents {
        "states-tool-entity-selected": {
            entity: Partial<HassEntity>;
        };
    }
}
export {};
