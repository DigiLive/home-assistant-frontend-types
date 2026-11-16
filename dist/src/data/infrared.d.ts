import type { HomeAssistant } from "../types";
export type InfraredProxyType = "emitter" | "receiver";
export type InfraredDeviceType = InfraredProxyType | "both";
export interface InfraredDevice {
    id: string;
    device_id: string | null;
    name: string;
    type: InfraredDeviceType;
    online: boolean;
    last_used?: string;
    entity_ids: string[];
}
export declare const computeInfraredDevices: (entities: HomeAssistant["entities"], states: HomeAssistant["states"], devices: HomeAssistant["devices"]) => InfraredDevice[];
