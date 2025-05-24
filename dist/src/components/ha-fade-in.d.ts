import SlAnimation from "@shoelace-style/shoelace/dist/components/animation/animation.component";
export declare class HaFadeIn extends SlAnimation {
    name: string;
    fill: FillMode;
    play: boolean;
    iterations: number;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-fade-in": HaFadeIn;
    }
}
