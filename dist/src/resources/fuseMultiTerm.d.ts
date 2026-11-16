import type { FuseIndex, FuseOptionKey, IFuseOptions } from "fuse.js";
export interface FuseWeightedKey {
    name: string | string[];
    weight: number;
}
/**
 * Performs a multi-term search across an array of items using Fuse.js.
 * All search terms must match for an item to be included in the results.
 * Result is NOT sorted by relevance.
 *
 * @template T - The type of items being searched
 * @param items - The array of items to search through
 * @param search - The search string containing one or more space-separated terms
 * @param searchKeys - An array of weighted keys defining which properties to search
 * @param fuseIndex - Optional pre-built Fuse index for improved performance
 * @param options - Optional Fuse.js configuration options
 * @returns An array of items that match all search terms
 */
export declare function multiTermSearch<T>(items: T[], search: string, searchKeys: FuseOptionKey<T>[], fuseIndex?: FuseIndex<T>, options?: IFuseOptions<T>): T[];
/**
 * Performs a multi-term search across items using Fuse.js, returning results sorted by relevance.
 *
 * This function splits the search string into individual terms and searches for each term
 * independently. Results are aggregated and scored based on:
 * - Number of terms matched (items must match ALL terms to be included)
 * - The Fuse.js relevance score of each term, which reflects key weight,
 *   match quality and field length
 *
 * @template T - The type of items being searched
 * @param items - The array of items to search through
 * @param search - The search string, which will be split by spaces into multiple terms
 * @param getItemId - Function to extract a unique identifier from each item
 * @param fuseIndex - Optional but highly recommended! Pre-built Fuse.js index for improved performance
 * @param options - Optional Fuse.js options to customize search behavior
 * @returns An array of items that match all search terms, sorted by relevance score (highest first).
 *          Returns all items if search is empty, or empty array if not all terms have matches.
 */
export declare function multiTermSortedSearch<T>(items: T[], search: string, getItemId: (item: T) => string, fuseIndex?: FuseIndex<T>, options?: IFuseOptions<T>): T[];
