export interface FavoriteCardItem {
    key: string;
    name: string;
}
export interface ReorderFavoriteCardsDialogParams {
    favorites: FavoriteCardItem[];
    saveFavorites: (favorites: string[]) => void;
}
export declare const importReorderFavoriteCardsDialog: () => Promise<typeof import("./hui-dialog-reorder-favorite-cards")>;
export declare const showReorderFavoriteCardsDialog: (element: HTMLElement, reorderFavoriteCardsDialogParams: ReorderFavoriteCardsDialogParams) => void;
