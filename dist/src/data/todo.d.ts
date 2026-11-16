import type { Connection, HassEntities } from "home-assistant-js-websocket";
import type { HomeAssistant, HomeAssistantFormatters, ServiceCallResponse } from "../types";
export interface TodoList {
    entity_id: string;
    name: string;
}
export declare const enum TodoItemStatus {
    NeedsAction = "needs_action",
    Completed = "completed"
}
export declare enum TodoSortMode {
    NONE = "none",
    ALPHA_ASC = "alpha_asc",
    ALPHA_DESC = "alpha_desc",
    DUEDATE_ASC = "duedate_asc",
    DUEDATE_DESC = "duedate_desc"
}
export interface TodoItem {
    uid: string;
    summary: string;
    status: TodoItemStatus | null;
    description?: string | null;
    due?: string | null;
    completed?: string | null;
}
export declare enum TodoListEntityFeature {
    CREATE_TODO_ITEM = 1,
    DELETE_TODO_ITEM = 2,
    UPDATE_TODO_ITEM = 4,
    MOVE_TODO_ITEM = 8,
    SET_DUE_DATE_ON_ITEM = 16,
    SET_DUE_DATETIME_ON_ITEM = 32,
    SET_DESCRIPTION_ON_ITEM = 64
}
export declare const getTodoLists: (states: HassEntities, entities: HomeAssistant["entities"], formatEntityName: HomeAssistantFormatters["formatEntityName"], language: string, includeHidden?: boolean) => TodoList[];
export interface TodoItems {
    items: TodoItem[];
}
export declare const fetchItems: (callWS: HomeAssistant["callWS"], entity_id: string) => Promise<TodoItem[]>;
export declare const subscribeItems: (connection: Connection, entity_id: string, callback: (update: TodoItems) => void) => Promise<() => Promise<void>>;
export declare const updateItem: (callService: HomeAssistant["callService"], entity_id: string, item: TodoItem) => Promise<ServiceCallResponse>;
export declare const createItem: (callService: HomeAssistant["callService"], entity_id: string, item: Omit<TodoItem, "uid" | "status">) => Promise<ServiceCallResponse>;
export declare const deleteItems: (callService: HomeAssistant["callService"], entity_id: string, uids: string[]) => Promise<ServiceCallResponse>;
export declare const moveItem: (callWS: HomeAssistant["callWS"], entity_id: string, uid: string, previous_uid: string | undefined) => Promise<void>;
