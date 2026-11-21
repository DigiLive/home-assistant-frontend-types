/** The zone marker: a colored circle with the zone's icon or initials, shared by the map and the zone editor */
export declare const ZONE_CIRCLE_SIZE = 36;
export declare const contrastingZoneContent: (color: string) => string;
export declare const zoneInitials: (name: string) => string;
export declare const createZoneMarkerElement: (options: {
    color: string;
    icon?: string;
    /** Path for an ha-svg-icon, when there is no icon name */
    iconPath?: string;
    name: string;
}) => HTMLElement;
/** Styles for the zone marker, included by ha-map */
export declare const zoneMarkerStyles = "\n  .zone-circle {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid var(--card-background-color, #fff);\n    box-sizing: border-box;\n    box-shadow: var(--ha-box-shadow-s);\n    overflow: hidden;\n    font-size: var(--ha-font-size-s);\n    font-weight: var(--ha-font-weight-medium);\n    --mdc-icon-size: 24px;\n  }\n";
