import type { RepositoryInfo } from "../../../data/marketplace/repository";
/**
 * Return what the address of a link or an image in the README of a repository
 * points at, for ha-markdown to rewrite every address with.
 *
 * The README is at the root of the repository, relative addresses are too:
 * documents open on GitHub, everything else comes from raw.
 */
export declare const repositoryUrl: (repository?: RepositoryInfo) => (url: string) => string;
export declare const markdownWithRepositoryContext: (input: string, repository?: RepositoryInfo) => string;
