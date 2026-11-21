import { ContextController } from "../common/decorators/consume";
import { type ServiceInfo } from "./compute-service-info";
/**
 * Reactive controller that prepares display data for a service action
 * (e.g. `light.turn_on`): loads service translations, resolves the localized
 * service name, and resolves the service icon (with a synchronous domain
 * fallback that upgrades once the full icon is loaded).
 *
 * Pulls connection, config, services, and i18n from Lit context, so the
 * caller only needs to feed in the service ID via `updateService()`.
 */
export declare class ServiceInfoController extends ContextController {
    private _connection?;
    private _config?;
    private _services?;
    private _i18n?;
    private _service?;
    private _resolvedService?;
    private _resolvedLanguage?;
    private _info;
    get info(): ServiceInfo;
    hostConnected(): void;
    protected contextUpdated(): void;
    updateService(service: string | undefined): void;
    private _resolve;
}
