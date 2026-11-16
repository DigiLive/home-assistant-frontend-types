import type { LoRaWANConnection, LoRaWANDevice, LoRaWANDevices, LoRaWANReception } from "../../../../../data/lorawan";
export type LoRaWANTopologyNode = {
    id: string;
    kind: "connection";
    connection: LoRaWANConnection;
} | {
    id: string;
    kind: "gateway";
    connection: LoRaWANConnection;
    gateway_id: string;
} | {
    id: string;
    kind: "device";
    connection: LoRaWANConnection;
    device: LoRaWANDevice;
};
export interface LoRaWANTopologyLink {
    source: string;
    target: string;
    kind: "membership" | "reception" | "unobserved";
    reception?: LoRaWANReception;
    device?: LoRaWANDevice;
}
export interface LoRaWANTopology {
    nodes: LoRaWANTopologyNode[];
    links: LoRaWANTopologyLink[];
}
export declare const buildLoRaWANTopology: (snapshot: LoRaWANDevices) => LoRaWANTopology;
