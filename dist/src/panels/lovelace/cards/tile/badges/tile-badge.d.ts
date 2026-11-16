import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { nothing } from "lit";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/tile/ha-tile-badge";
import type { HomeAssistant } from "../../../../../types";
export type RenderBadgeFunction = (stateObj: HassEntity, hass: HomeAssistant) => TemplateResult | typeof nothing;
export declare const renderTileBadge: RenderBadgeFunction;
