export declare const BOARD_NAMES: Record<string, string>;
export interface HardwareInfo {
    hardware: HardwareInfoEntry[];
}
export interface HardwareInfoEntry {
    board: HardwareInfoBoardInfo | null;
    dongle: HardwareInfoDongleInfo | null;
    config_entries: string[] | null;
    name: string | null;
    url: string | null;
}
export interface HardwareInfoBoardInfo {
    manufacturer: string;
    model: string | null;
    revision: string | null;
    hassio_board_id: string | null;
}
export interface HardwareInfoDongleInfo {
    manufacturer: string | null;
    description: string | null;
    pid: string;
    vid: string;
    serial_number: string | null;
}
export interface SystemStatusStreamMessage {
    cpu_percent: number;
    memory_free_mb: number;
    memory_used_mb: number;
    memory_used_percent: number;
    timestamp: string;
}
