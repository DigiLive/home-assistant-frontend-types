import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { ReactiveElement } from "lit";
type Callback = (oldValue: any, newValue: any) => void;
declare class StorageClass {
    constructor(store?: Storage);
    storage: globalThis.Storage;
    private _storage;
    private _listeners;
    addFromStorage(storageKey: any): void;
    subscribeChanges(storageKey: string, callback: Callback): UnsubscribeFunc;
    unsubscribeChanges(storageKey: string, callback: Callback): void;
    hasKey(storageKey: string): any;
    getValue<T = any>(storageKey: string): T | undefined;
    setValue<T = any>(storageKey: string, value: T): void;
}
export type StorageName = "localStorage" | "sessionStorage";
export declare const getStorage: (storageName?: StorageName) => StorageClass;
export declare function storage(options: {
    key?: string;
    storage?: StorageName;
    subscribe?: boolean;
    state?: boolean;
    serializer?: (value: any) => any;
    deserializer?: (value: any) => any;
}): <ElemClass extends ReactiveElement>(proto: ElemClass, propertyKey: string) => void;
export {};
