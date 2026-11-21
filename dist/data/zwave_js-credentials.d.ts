import type { HomeAssistant } from "../types";
export type ZwaveCredentialType = "pin_code" | "password" | "rfid_code" | "ble" | "nfc" | "uwb" | "eye_biometric" | "face_biometric" | "finger_biometric" | "hand_biometric" | "unspecified_biometric" | "desfire";
export declare const ENTERABLE_ZWAVE_CREDENTIAL_TYPES: readonly ZwaveCredentialType[];
export declare const SIMPLE_USER_TYPES: readonly string[];
export declare const DEFAULT_CREDENTIAL_MIN_LENGTH = 4;
export declare const DEFAULT_CREDENTIAL_MAX_LENGTH = 10;
export type CredentialErrorCode = "required" | "length" | "pin_digits_only" | "";
export declare const enterableCredentialTypes: (capabilities: ZwaveCredentialCapabilities) => ZwaveCredentialType[];
export declare const compatibleUserTypes: (capabilities: ZwaveCredentialCapabilities) => string[];
export declare const canAddZwaveUser: (capabilities: ZwaveCredentialCapabilities) => boolean;
export declare const getCredentialError: (data: string, type: ZwaveCredentialType | "", capability: ZwaveCredentialTypeCapability | undefined) => CredentialErrorCode;
export interface ZwaveCredentialTypeCapability {
    num_slots: number;
    min_length: number;
    max_length: number;
    supports_learn: boolean;
}
export interface ZwaveCredentialCapabilities {
    supports_user_management: boolean;
    max_users: number;
    supported_user_types: string[];
    max_user_name_length: number;
    supported_credential_rules: string[];
    supported_credential_types: Partial<Record<ZwaveCredentialType, ZwaveCredentialTypeCapability>>;
}
export interface ZwaveCredential {
    type: ZwaveCredentialType;
    slot: number;
}
export interface ZwaveUser {
    user_id: number;
    user_name: string | null;
    active: boolean;
    user_type: string;
    credential_rule: string | null;
    credentials: ZwaveCredential[];
}
export interface ZwaveUsersResponse {
    max_users: number;
    users: ZwaveUser[];
}
export interface SetZwaveUserParams {
    user_id?: number;
    user_name?: string;
    user_type?: string;
    credential_rule?: string;
    active?: boolean;
    credential_type?: ZwaveCredentialType;
    credential_slot?: number;
    credential_data?: string;
}
export interface SetZwaveUserResult {
    user_id: number;
    credential_slot?: number | null;
}
export interface SetZwaveCredentialParams {
    user_id: number;
    credential_type: ZwaveCredentialType;
    credential_data: string;
    credential_slot?: number;
}
export interface SetZwaveCredentialResult {
    credential_slot: number;
    user_id: number;
}
export interface DeleteZwaveCredentialParams {
    user_id: number;
    credential_type: ZwaveCredentialType;
    credential_slot: number;
}
export declare const getZwaveCredentialCapabilities: (hass: HomeAssistant, entity_id: string) => Promise<ZwaveCredentialCapabilities>;
export declare const getZwaveUsers: (hass: HomeAssistant, entity_id: string) => Promise<ZwaveUsersResponse>;
export declare const setZwaveUser: (hass: HomeAssistant, entity_id: string, params: SetZwaveUserParams) => Promise<SetZwaveUserResult>;
export declare const deleteZwaveUser: (hass: HomeAssistant, entity_id: string, user_id: number) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const deleteZwaveAllUsers: (hass: HomeAssistant, entity_id: string) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const setZwaveCredential: (hass: HomeAssistant, entity_id: string, params: SetZwaveCredentialParams) => Promise<SetZwaveCredentialResult>;
export declare const deleteZwaveCredential: (hass: HomeAssistant, entity_id: string, params: DeleteZwaveCredentialParams) => Promise<import("../types").ServiceCallResponse<any>>;
