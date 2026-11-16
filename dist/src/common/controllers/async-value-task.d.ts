import { Task, type TaskConfig } from "@lit/task";
import type { ReactiveControllerHost } from "lit";
/**
 * A `@lit/task` Task with a sticky `resolved` flag: false until the task has
 * completed once, then true. Lets callers tell "still loading" apart from
 * "resolved with an empty value" without a null sentinel, while keeping the
 * previous value during a re-run.
 */
export declare class AsyncValueTask<T extends readonly unknown[], R> extends Task<T, R> {
    private _resolved;
    constructor(host: ReactiveControllerHost, config: TaskConfig<T, R>);
    get resolved(): boolean;
}
