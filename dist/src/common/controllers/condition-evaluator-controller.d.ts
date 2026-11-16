import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import type { ConditionContext, VisibilityCondition } from "../../panels/lovelace/common/validate-condition";
import type { HomeAssistant } from "../../types";
/** `unknown` until a server subtree reports. */
export type ConditionEvaluation = "visible" | "hidden" | "unknown";
export interface ConditionEvaluatorOptions {
    onResult: (result: ConditionEvaluation, error?: string) => void;
    /** Wait this long before (re)opening subscriptions after the tree changes. */
    resubscribeDelay?: number;
}
/**
 * Live evaluation of a visibility tree: `subscribe_condition` for server
 * subtrees, local checks for screen/user/time/etc. Call {@link observe} when
 * inputs change. Result stays `unknown` until server replies so nothing flashes.
 */
export declare class ConditionEvaluatorController implements ReactiveController {
    private _host;
    private readonly _onResult;
    private readonly _resubscribeDelay;
    private _conditions?;
    private _hass?;
    private _getContext?;
    private _connected;
    private _subscribedSignature?;
    private _pendingSignature?;
    private _hasPendingResubscribe;
    private _subscribedConnection?;
    private _lastConditionsRef?;
    private _lastSignature?;
    private _split?;
    private _serverResults;
    private _subtreeErrors;
    private _subtreeTemplateErrors;
    private _subscriptions;
    private _listeners;
    private _generation;
    private _resubscribeTimeout?;
    private _result;
    private _error?;
    private _notifiedResult?;
    private _notifiedError?;
    constructor(host: ReactiveControllerHost, options: ConditionEvaluatorOptions);
    get result(): ConditionEvaluation;
    get error(): string | undefined;
    /**
     * Update inputs. Resubscribes only when the tree (or connection) changes.
     */
    observe(conditions: VisibilityCondition[] | undefined, hass: HomeAssistant | undefined, getContext?: () => ConditionContext): void;
    hostConnected(): void;
    hostDisconnected(): void;
    private _signatureOf;
    private _sync;
    private _scheduleResubscribe;
    private _subscribe;
    private _recompute;
    private _setResult;
    private _teardown;
}
