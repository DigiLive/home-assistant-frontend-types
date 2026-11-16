import { ContextController } from "../common/decorators/consume";
import { type NavigationPathInfo } from "./compute-navigation-path-info";
/**
 * Reactive controller that keeps `NavigationPathInfo` in sync with a
 * navigation path. Resolves synchronously first, then subscribes to
 * lovelace config updates for view paths.
 *
 * Pulls localize, panels, areas, devices, config and connection from Lit
 * context, so the caller only needs to feed in the path via `update()`.
 */
export declare class NavigationPathInfoController extends ContextController {
    private _localize?;
    private _panels?;
    private _areas?;
    private _devices?;
    private _config?;
    private _connection?;
    private _info;
    private _unsub?;
    private _path?;
    get info(): NavigationPathInfo;
    update(path: string | undefined): void;
    hostConnected(): void;
    hostDisconnected(): void;
    protected contextUpdated(): void;
    private _resolve;
    private _unsubscribe;
}
