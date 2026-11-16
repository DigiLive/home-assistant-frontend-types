import type { HomeAssistant } from "../../types";
/**
 * Call a function with result caching per entity.
 * @param cacheKey key to namespace the cache
 * @param cacheTime time to cache the results
 * @param func function to fetch the data
 * @param hass Home Assistant object (or slice) the cache is keyed on
 * @param entityId entity to fetch data for
 * @param args extra arguments to pass to the function to fetch the data
 * @returns
 */
export declare const timeCacheEntityPromiseFunc: <T>(cacheKey: string, cacheTime: number, func: (hass: Pick<HomeAssistant, "callWS" | "hassUrl">, entityId: string, ...args: any[]) => Promise<T>, hass: Pick<HomeAssistant, "callWS" | "hassUrl">, entityId: string, ...args: any[]) => Promise<T>;
