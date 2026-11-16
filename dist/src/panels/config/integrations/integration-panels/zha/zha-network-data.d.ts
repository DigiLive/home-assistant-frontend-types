import type { NetworkData } from "../../../../../components/chart/ha-network-graph";
import type { ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
export declare function createZHANetworkChartData(devices: ZHADevice[], hass: HomeAssistant, element: Element): NetworkData;
