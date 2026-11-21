import type { HomeAssistant } from "../types";
export declare const SSL_PROFILES: readonly ["modern_v6", "intermediate_v6", "modern_v4", "intermediate_v4"];
export type SslProfile = (typeof SSL_PROFILES)[number];
export interface HttpConfig {
    server_host?: string[];
    server_port?: number;
    ssl_certificate?: string;
    ssl_peer_certificate?: string;
    ssl_key?: string;
    cors_allowed_origins?: string[];
    use_x_forwarded_for?: boolean;
    trusted_proxies?: string[];
    use_x_frame_options?: boolean;
    ip_ban_enabled?: boolean;
    login_attempts_threshold?: number;
    ssl_profile?: SslProfile;
}
export type ActiveConfigType = "stable" | "pending" | "default" | "default_legacy_port";
export interface HttpConfigWithMeta extends HttpConfig {
    created_at?: string;
    error?: string | null;
    error_message?: string | null;
}
export interface HttpConfigState {
    stable: HttpConfigWithMeta;
    pending: HttpConfigWithMeta | null;
    revert_at: string | null;
    active_config_type?: ActiveConfigType;
    default?: HttpConfigWithMeta;
}
export declare const HTTP_CONFIG_FIELDS: (keyof HttpConfig)[];
export interface SaveHttpConfigResult {
    restart: boolean;
}
export declare const stripHttpConfigMeta: (config: HttpConfig) => HttpConfig;
export declare const fetchHttpConfig: (hass: HomeAssistant) => Promise<HttpConfigState>;
export declare const saveHttpConfig: (hass: HomeAssistant, config: HttpConfig | null) => Promise<SaveHttpConfigResult>;
export declare const promoteHttpConfig: (hass: HomeAssistant) => Promise<undefined>;
