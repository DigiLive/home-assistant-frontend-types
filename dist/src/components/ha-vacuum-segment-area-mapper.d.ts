import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { Segment } from "../data/vacuum";
import "./ha-alert";
import "./ha-area-picker";
import "./ha-icon-button";
import "./ha-svg-icon";
type AreaSegmentMapping = Record<string, string[]>;
export declare class HaVacuumSegmentAreaMapper extends LitElement {
    entityId: string;
    value?: AreaSegmentMapping;
    private _segments?;
    private _loading;
    private _error?;
    private _localize;
    private _areas?;
    private _api;
    get lastSeenSegments(): Segment[];
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _loadSegments;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getOrphanedAreas;
    private _renderOrphanedAreas;
    private _removeOrphanedArea;
    private _groupSegments;
    private _renderSegment;
    private _handleAreaChanged;
    private _getSegmentAreas;
    private _areaChanged;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-vacuum-segment-area-mapper": HaVacuumSegmentAreaMapper;
    }
}
export {};
