import type { HASSDomEvent } from "../common/dom/fire_event";
import type { HomeAssistantMain } from "../layouts/home-assistant-main";
import type { EMIncomingMessageBarCodeScanAborted, EMIncomingMessageBarCodeScanResult, EMIncomingMessageCommands, ImprovDiscoveredDevice, MatterCommissionFinish, WebRtcStreamStopped } from "./external_messaging";
export declare const attachExternalToApp: (hassMainEl: HomeAssistantMain) => void;
export declare const addExternalBarCodeListener: (listener: (msg: EMIncomingMessageBarCodeScanResult | EMIncomingMessageBarCodeScanAborted) => boolean) => () => void;
export declare const handleExternalMessage: (hassMainEl: HomeAssistantMain, msg: EMIncomingMessageCommands) => boolean;
declare global {
    interface HASSDomEvents {
        "improv-discovered-device": ImprovDiscoveredDevice;
        "improv-device-setup-done": undefined;
        "matter-commission-finish": MatterCommissionFinish;
        "webrtc-stream-stopped": WebRtcStreamStopped;
    }
    interface GlobalEventHandlersEventMap {
        "improv-discovered-device": HASSDomEvent<HASSDomEvents["improv-discovered-device"]>;
        "improv-device-setup-done": HASSDomEvent<HASSDomEvents["improv-device-setup-done"]>;
        "matter-commission-finish": HASSDomEvent<HASSDomEvents["matter-commission-finish"]>;
        "webrtc-stream-stopped": HASSDomEvent<HASSDomEvents["webrtc-stream-stopped"]>;
    }
}
