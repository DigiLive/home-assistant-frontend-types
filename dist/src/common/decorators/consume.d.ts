import { type Context, type consume as litConsume } from "@lit/context";
import type { ReactiveController, ReactiveControllerHost } from "lit";
/**
 * Reactive controller that subscribes to a Lit context and hands each
 * delivered value to `assign` — WITHOUT forcing a host update.
 *
 * `@lit/context`'s built-in `ContextConsumer` calls `host.requestUpdate()`
 * (without a property key) on every provider notification. That makes every
 * consumed field behave as if it was reactive state, even without `@state()`,
 * and bypasses any `hasChanged` / `@transform` gating on the field. For a hot
 * context such as `statesContext` (replaced on every entity state change) that
 * means every consumer runs an update/render cycle on every state change.
 *
 * This controller leaves update scheduling to the property itself:
 * - with `@state()`, an update is requested when the value changes
 *   (Lit gates `requestUpdate(key, oldValue)` with `hasChanged`),
 * - with `@transform`, only when the transformed value changes,
 * - without either, the field is a plain non-reactive value that is kept up to
 *   date but never triggers a render. Use this for values only read in event
 *   handlers or callbacks (e.g. `apiContext`).
 *
 * Use it instead of `ContextConsumer` in controllers or for lazily created
 * subscriptions. `assign` must store the value in a reactive field or call
 * `host.requestUpdate()` itself when the host needs to rerender.
 */
export declare class ContextSubscriptionController<ValueType> implements ReactiveController {
    private readonly _host;
    private readonly _context;
    private readonly _assign;
    private readonly _subscribe;
    private _unsubscribe?;
    constructor(_host: ReactiveControllerHost & HTMLElement, _context: Context<unknown, ValueType>, _assign: (value: ValueType) => void, _subscribe?: boolean);
    hostConnected(): void;
    hostDisconnected(): void;
    private readonly _callback;
}
export declare const consume: typeof litConsume;
/**
 * Base class for reactive controllers whose fields use {@link consumeContext}.
 * Each decorated field is kept current while the host is connected, and
 * `contextUpdated()` runs whenever one of them changes.
 */
export declare abstract class ContextController implements ReactiveController {
    protected readonly host: ReactiveControllerHost & HTMLElement;
    hostConnected?(): void;
    hostDisconnected?(): void;
    hostUpdate?(): void;
    hostUpdated?(): void;
    constructor(host: ReactiveControllerHost & HTMLElement);
    private _consumeContexts;
    protected contextUpdated(): void;
}
type FieldMustAccept<Proto, Key extends PropertyKey, Value> = Proto extends Partial<Record<Key, infer Field>> ? [Value] extends [Field | undefined] ? undefined : {
    message: "stored type not assignable to consuming field";
    stored: Value;
    consuming: Field;
} : undefined;
/**
 * `@consume` for fields of a {@link ContextController}. `transform` picks
 * the part of the context value to store; `contextUpdated()` only runs when
 * that part changes.
 */
export declare const consumeContext: <ValueType, TransformedType = ValueType>({ context, subscribe, transform, }: {
    context: Context<unknown, ValueType>;
    subscribe?: boolean;
    transform?: (value: ValueType) => TransformedType;
}) => <Proto extends ContextController, Key extends PropertyKey>(proto: Proto, key: Key) => FieldMustAccept<Proto, Key, TransformedType>;
export {};
