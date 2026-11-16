import type { EntityRegistryEntry } from "../../data/entity/entity_registry";
/**
 * Map colors for entities, from their place in the registry, so an entity has
 * the same color on every map. Zones have their own sequence. Persons and
 * trackers share another, persons first, so trackers discovered over time
 * shift neither. Entities without an entry (e.g. YAML zones) get a color
 * derived from their id.
 */
export declare const HOME_ZONE_ENTITY_ID = "zone.home";
/** The palette color of an entity on a map */
export declare const entityMapColor: (entityId: string, entries: EntityRegistryEntry[], computedStyles: CSSStyleDeclaration) => string;
/** The color a new zone will take once created, from the slot after the last zone */
export declare const nextZoneColor: (passive: boolean, entries: EntityRegistryEntry[], computedStyles: CSSStyleDeclaration) => string;
/** A zone's color: primary for home, muted for passive, its entity map color otherwise */
export declare const zoneColor: (entityId: string, passive: boolean, entries: EntityRegistryEntry[], computedStyles: CSSStyleDeclaration) => string;
