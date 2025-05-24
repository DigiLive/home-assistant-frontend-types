import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-select";
import type { Cluster, ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
import "./zha-cluster-attributes";
import "./zha-cluster-commands";
import "../../../../../components/sl-tab-group";
declare global {
    interface HASSDomEvents {
        "zha-cluster-selected": {
            cluster?: Cluster;
        };
    }
}
export declare class ZHAManageClusters extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    device?: ZHADevice;
    private _selectedClusterIndex;
    private _clusters;
    private _selectedCluster?;
    private _currTab;
    private _clustersLoaded;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchClustersForZhaDevice;
    private _handleTabChanged;
    private _selectedClusterChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-manage-clusters": ZHAManageClusters;
    }
}
