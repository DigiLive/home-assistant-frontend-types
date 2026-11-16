import WaAnimation from "@home-assistant/webawesome/dist/components/animation/animation";
export declare class HaFadeIn extends WaAnimation {
    play: boolean;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-fade-in": HaFadeIn;
    }
}
