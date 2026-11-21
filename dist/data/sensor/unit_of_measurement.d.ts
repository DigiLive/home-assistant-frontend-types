/**
 * Compute the units allowed for a set of sensor device classes and state classes.
 *
 * - Device classes: the union of their units. A non-numeric device class
 *   (e.g. `enum`) only allows "no unit" (`null`); a numeric device class
 *   without a unit table (e.g. `monetary`) does not restrict.
 * - State classes: the union of their units, intersected with the device class
 *   units. A state class without units (e.g. `measurement`) does not restrict.
 *
 * @returns `undefined` when unrestricted (custom unit allowed), `[]` when nothing is allowed
 */
export declare const computeAllowedUnits: (deviceClasses?: string[], stateClasses?: string[]) => (string | null)[] | undefined;
type ClassFilter = string | string[] | null | undefined;
/**
 * Combine the fixed selector config (validated by core) with the form context,
 * which narrows the allowed units further.
 *
 * @returns `undefined` when unrestricted (custom unit allowed), `[]` when nothing is allowed
 */
export declare const computeSelectorUnits: (config?: {
    device_classes?: ClassFilter;
    state_classes?: ClassFilter;
}, context?: {
    filter_device_class?: ClassFilter;
    filter_state_class?: ClassFilter;
}) => (string | null)[] | undefined;
export {};
