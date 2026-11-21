import type { MarkedOptions } from "marked";
declare const renderMarkdown: (content: string, markedOptions: MarkedOptions, hassOptions?: {
    allowSvg?: boolean;
    allowDataUrl?: boolean;
    allowRelativeUrls?: boolean;
}) => Promise<string[]>;
declare const api: {
    renderMarkdown: typeof renderMarkdown;
};
export type Api = typeof api;
export {};
