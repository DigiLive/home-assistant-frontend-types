import type { EntityNameType } from "../common/entity/compute_entity_name_display";
export type EntityIdPart = EntityNameType;
export type EntityIdFormat = EntityIdPart[];
export declare const DEFAULT_ENTITY_ID_FORMAT: EntityIdFormat;
export declare const isDefaultEntityIdFormat: (format: EntityIdFormat) => boolean;
