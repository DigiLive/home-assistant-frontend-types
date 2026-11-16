/**
 * Measures the volume of an audio track with the Web Audio API.
 *
 * Calls `onLevel` with a level between 0 and 1, rounded to steps of 0.05 and
 * only when it changed, so silence does not cause work every frame.
 * Returns a function that stops measuring and releases the audio context.
 */
export declare const watchAudioLevel: (track: MediaStreamTrack, onLevel: (level: number) => void) => (() => void);
