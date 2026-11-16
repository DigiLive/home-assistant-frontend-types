import WaAnimation from "@home-assistant/webawesome/dist/components/animation/animation";
export declare class HaFadeOut extends WaAnimation {
    play: boolean;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-fade-out": HaFadeOut;
    }
}
