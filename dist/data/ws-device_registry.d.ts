import type { Connection } from "home-assistant-js-websocket";
import type { DeviceRegistryEntry, DeviceRegistryListEntry } from "./device/device_registry";
/**
 * Resolve the mixed device list from `config/device_registry/list` into a flat
 * list of complete {@link DeviceRegistryEntry} objects.
 *
 * Children are stripped over the wire and inherit the rest from their parent:
 * - config-entry association comes from the child's own `config_entry_id`, so
 *   children still show up under their integration;
 * - hardware/display fields (manufacturer, model, versions, ...) are inherited
 *   from the parent, since a child is a logical part of the same hardware;
 * - identity fields (`connections`, `via_device_id`) are NOT inherited — a
 *   child is not the parent and has no connections of its own.
 *
 * Nesting is a single level (core rejects a child as another child's parent),
 * so no recursion is needed.
 */
export declare const resolveChildDevices: (entries: DeviceRegistryListEntry[]) => DeviceRegistryEntry[];
export declare const fetchDeviceRegistry: (conn: Connection) => Promise<DeviceRegistryEntry[]>;
export declare const subscribeDeviceRegistry: (conn: Connection, onChange: (devices: DeviceRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
