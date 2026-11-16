import type { HaSlider } from "../../components/ha-slider";
interface VolumeSliderControllerOptions {
    getSlider: () => HaSlider | undefined;
    step: number;
    onSetVolume: (value: number) => void;
    onSetVolumeDebounced?: (value: number) => void;
    onValueUpdated?: (value: number) => void;
}
export declare class VolumeSliderController {
    private _touchStartX;
    private _touchStartY;
    private _touchStartValue;
    private _touchDragging;
    private _touchScrolling;
    private _dragging;
    private _lastValue;
    private _options;
    constructor(options: VolumeSliderControllerOptions);
    get isInteracting(): boolean;
    setStep(step: number): void;
    handleInput: (ev: Event) => void;
    handleChange: (ev: Event) => void;
    handleTouchStart: (ev: TouchEvent) => void;
    handleTouchMove: (ev: TouchEvent) => void;
    handleTouchEnd: (ev: TouchEvent) => void;
    handleTouchCancel: () => void;
    handleWheel: (ev: WheelEvent) => void;
    private _getVolumeFromTouch;
    private _roundVolumeValue;
    private _getSliderValue;
    private _updateValue;
    private _showTooltip;
    private _hideTooltip;
}
export {};
