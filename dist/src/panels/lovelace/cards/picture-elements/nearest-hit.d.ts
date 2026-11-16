export interface HitTarget {
    isIcon: boolean;
    x1: number;
    x2: number;
    cy: number;
    bx: number;
    by: number;
    bw: number;
    bh: number;
}
export declare const seedDistanceSquared: (seed: HitTarget, x: number, y: number) => number;
export declare const isInsideBox: (seed: HitTarget, x: number, y: number) => boolean;
export declare const pickNearestTarget: <T extends HitTarget>(seeds: readonly T[], x: number, y: number, reach: number) => T | undefined;
