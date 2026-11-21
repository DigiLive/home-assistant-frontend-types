import type { Connection, UnsubscribeFunc } from "home-assistant-js-websocket";
import type { ReactiveControllerHost } from "lit";
import { ContextController } from "../common/decorators/consume";
export interface ConnectionSubscriptionControllerOptions {
    /** Subscribed only while this returns true; re-evaluated after each host update. */
    enabled?: () => boolean;
    subscribe: (connection: Connection) => UnsubscribeFunc | Promise<UnsubscribeFunc>;
}
/**
 * Subscribes the host to a websocket subscription while it is connected,
 * using the connection from context. Replaces `SubscribeMixin` for
 * components that no longer take `hass`.
 */
export declare class ConnectionSubscriptionController extends ContextController {
    private _connection?;
    private _options;
    private _connected;
    private _subscribedConnection?;
    private _unsub?;
    constructor(host: ReactiveControllerHost & HTMLElement, options: ConnectionSubscriptionControllerOptions);
    hostConnected(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    protected contextUpdated(): void;
    private _subscribe;
    private _unsubscribe;
}
