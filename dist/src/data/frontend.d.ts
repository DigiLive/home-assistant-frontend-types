import type { Connection } from "home-assistant-js-websocket";
import type { ShortcutItem } from "./home_shortcuts";
export interface SurveyInteraction {
    date: string;
    action: "opened" | "dismissed";
}
export interface CoreFrontendUserData {
    showEntityIdPicker?: boolean;
    default_panel?: string;
    apps_info_dismissed?: boolean;
    dashboard_favorite_card_types?: string[];
}
export interface SidebarFrontendUserData {
    panelOrder?: string[];
    hiddenPanels?: string[];
}
export interface ESPHomeFrontendUserData {
    setupDeferred?: string[];
}
export interface CoreFrontendSystemData {
    default_panel?: string;
    onboarded_version?: string;
    onboarded_date?: string;
    surveys?: {
        onboarding?: SurveyInteraction;
    };
}
export interface HomeFrontendSystemData {
    favorite_entities?: string[];
    welcome_banner_dismissed?: boolean;
    hide_welcome_message?: boolean;
    hide_suggested_entities?: boolean;
    shortcuts?: ShortcutItem[];
}
export type SecurityAlertSeverity = "alert" | "warning";
export interface SecurityAlertEntityConfig {
    entity: string;
    severity?: SecurityAlertSeverity;
}
export interface SecurityFrontendSystemData {
    alert_entities?: SecurityAlertEntityConfig[];
    favorite_entities?: string[];
}
export interface EnergyFrontendSystemData {
    hidden_cards?: string[];
}
declare global {
    interface FrontendUserData {
        core: CoreFrontendUserData;
        sidebar: SidebarFrontendUserData;
        esphome: ESPHomeFrontendUserData;
    }
    interface FrontendSystemData {
        core: CoreFrontendSystemData;
        home: HomeFrontendSystemData;
        energy: EnergyFrontendSystemData;
        security: SecurityFrontendSystemData;
    }
}
export type ValidUserDataKey = keyof FrontendUserData;
export type ValidSystemDataKey = keyof FrontendSystemData;
export declare const fetchFrontendUserData: <UserDataKey extends ValidUserDataKey>(conn: Connection, key: UserDataKey) => Promise<FrontendUserData[UserDataKey] | null>;
export declare const saveFrontendUserData: <UserDataKey extends ValidUserDataKey>(conn: Connection, key: UserDataKey, value: FrontendUserData[UserDataKey]) => Promise<void>;
export declare const subscribeFrontendUserData: <UserDataKey extends ValidUserDataKey>(conn: Connection, userDataKey: UserDataKey, onChange: (data: {
    value: FrontendUserData[UserDataKey] | null;
}) => void) => Promise<() => Promise<void>>;
export declare const fetchFrontendSystemData: <SystemDataKey extends ValidSystemDataKey>(conn: Connection, key: SystemDataKey) => Promise<FrontendSystemData[SystemDataKey] | null>;
export declare const saveFrontendSystemData: <SystemDataKey extends ValidSystemDataKey>(conn: Connection, key: SystemDataKey, value: FrontendSystemData[SystemDataKey]) => Promise<void>;
export declare const subscribeFrontendSystemData: <SystemDataKey extends ValidSystemDataKey>(conn: Connection, systemDataKey: SystemDataKey, onChange: (data: {
    value: FrontendSystemData[SystemDataKey] | null;
}) => void) => Promise<() => Promise<void>>;
