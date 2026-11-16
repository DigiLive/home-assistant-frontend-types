import type { ContextType } from "@lit/context";
import type { HassEntity } from "home-assistant-js-websocket";
import type { registriesContext, statesContext } from "../../data/context";
export type SecurityEntityContext = ContextType<typeof registriesContext> & {
    states: ContextType<typeof statesContext>;
};
export declare const createSecurityEntityFilter: (getContext: () => SecurityEntityContext | undefined) => (entity: HassEntity) => boolean;
