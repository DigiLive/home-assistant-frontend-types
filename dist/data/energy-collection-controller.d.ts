import type { ReactiveControllerHost } from "lit";
import { ContextController } from "../common/decorators/consume";
import type { EnergyCollection, EnergyData } from "./energy";
export interface EnergyCollectionControllerOptions {
    /** Subscribed only while this returns a config. */
    config: () => {
        collection_key?: string;
    } | undefined;
    beforeSubscribe?: (collection: EnergyCollection) => void;
    onData: (data: EnergyData) => void;
}
/**
 * Subscribes the host to its energy collection while it is connected. The host
 * may be the first subscriber, so this consumes everything needed to create
 * the collection.
 */
export declare class EnergyCollectionController extends ContextController {
    private _connection?;
    private _panelUrl?;
    private _callWS?;
    private _entities?;
    private _states?;
    private _locale?;
    private _hassConfig?;
    private _options;
    private _connected?;
    private _key?;
    private _unsub?;
    private _collection?;
    constructor(host: ReactiveControllerHost & HTMLElement, options: EnergyCollectionControllerOptions);
    get collection(): EnergyCollection | undefined;
    hostConnected(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    protected contextUpdated(): void;
    private _subscribe;
    private _unsubscribe;
}
