import type { CallWS } from "../../types";
export declare const supervisorUrl: (path: string) => string;
export interface HassioResponse<T> {
    data: T;
    message?: string;
    result: "ok" | "error";
}
export interface HassioStats {
    blk_read: number;
    blk_write: number;
    cpu_percent: number | null;
    cpu_system_usage: number;
    cpu_usage: number;
    memory_limit: number;
    memory_percent: number;
    memory_usage: number;
    network_rx: number;
    network_tx: number;
    online_cpus: number;
}
export declare const extractApiErrorMessage: (error: any) => string;
export declare const ignoreSupervisorError: (error: any) => boolean;
export declare const fetchHassioStats: (callWS: CallWS, container: string) => Promise<HassioStats>;
