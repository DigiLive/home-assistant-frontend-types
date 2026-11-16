import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-generic-picker";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import type { Cluster, ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
import "./zha-cluster-attributes";
import "./zha-cluster-commands";
declare global {
    interface HASSDomEvents {
        "zha-cluster-selected": {
            cluster?: Cluster;
        };
    }
}
export declare class ZHAManageClusters extends LitElement {
    hass: HomeAssistant;
    device?: ZHADevice;
    private _selectedClusterValue?;
    private _clusters;
    private _selectedCluster?;
    private _currTab;
    private _clustersLoaded;
    private _clustersError?;
    private _clusterPicker?;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderClusterHeader;
    private _renderClusterPicker;
    private _renderClusterSegmentedTabs;
    private _renderSelectedClusterPanel;
    private _fetchClustersForZhaDevice;
    private _clusterTabClicked;
    private _selectClusterTab;
    private _selectedClusterChanged;
    private _openClusterPicker;
    private _selectClusterValue;
    private _selectCluster;
    private _clusterItems;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-manage-clusters": ZHAManageClusters;
    }
}
