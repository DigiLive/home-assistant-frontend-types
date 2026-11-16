import type { IntegrationManifest } from "./integration";
import type { LoggedError } from "./system_log";
export declare const systemLogReportUrl: (item: LoggedError, coreVersion: string, manifest?: IntegrationManifest | null, installationType?: string) => string;
