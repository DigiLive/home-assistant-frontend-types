import "../../../components/ha-svg-icon";
import type { RepositoryBase } from "../../../data/marketplace/repository";
interface RepositoryIconOptions {
    darkMode: boolean | undefined;
    hassUrl: string;
    installedLabel?: string;
    updateLabel?: string;
    skippedLabel?: string;
}
export declare const renderRepositoryIcon: (repository: RepositoryBase & {
    update_skipped?: boolean;
}, { darkMode, hassUrl, installedLabel, updateLabel, skippedLabel, }: RepositoryIconOptions) => import("lit-html").TemplateResult<1>;
export {};
