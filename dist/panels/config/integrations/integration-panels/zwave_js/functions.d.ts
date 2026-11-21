/**
 * Formats a Z-Wave home ID as an uppercase hexadecimal string with 0x prefix.
 * Z-Wave home IDs are 32-bit values (4 bytes).
 *
 * @param homeId - The home ID as a number
 * @returns Formatted hex string (e.g., "0xD34DB33F")
 */
export declare const formatHomeIdAsHex: (homeId: number) => string;
