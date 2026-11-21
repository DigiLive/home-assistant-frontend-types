import type { HomeAssistant } from "../types";
import type { MediaSelectorValue, Selector } from "./selector";
export declare enum AITaskEntityFeature {
    GENERATE_DATA = 1,
    SUPPORT_ATTACHMENTS = 2,
    GENERATE_IMAGE = 4,
    EVALUATE = 8
}
export interface AITaskPreferences {
    evaluate_entity_id: string | null;
    allow_automatic_evaluation: boolean;
    gen_data_entity_id: string | null;
    gen_image_entity_id: string | null;
}
export interface GenDataTask {
    task_name: string;
    entity_id?: string;
    instructions: string;
    structure?: AITaskStructure;
}
export interface GenDataTaskResult<T = string> {
    conversation_id: string;
    data: T;
}
export interface AITaskStructureField {
    description?: string;
    required?: boolean;
    selector: Selector;
}
export type AITaskStructure = Record<string, AITaskStructureField>;
export interface NoulQuestion {
    type: "noul";
    instructions: string;
}
export interface ChoiceQuestion {
    type: "choice";
    instructions: string;
    criteria: Record<string, string>;
}
export interface ScoreQuestion {
    type: "score";
    instructions: string;
    criteria: string[];
}
export type EvaluationQuestion = NoulQuestion | ChoiceQuestion | ScoreQuestion;
export interface EvaluationTask {
    task_name: string;
    entity_id?: string;
    state?: unknown;
    questions: Record<string, EvaluationQuestion>;
    attachments?: MediaSelectorValue[];
}
export interface NoulAnswer {
    type: "noul";
    noul: number;
}
export interface ChoiceAnswer {
    type: "choice";
    choice: string;
    probabilities: Record<string, number>;
}
export interface ScoreAnswer {
    type: "score";
    score: number;
    probabilities: number[];
}
export type EvaluationAnswer = NoulAnswer | ChoiceAnswer | ScoreAnswer;
export interface EvaluationTaskResult {
    answers: Record<string, EvaluationAnswer>;
}
export declare const fetchAITaskPreferences: (callWS: HomeAssistant["callWS"]) => Promise<AITaskPreferences>;
export declare const saveAITaskPreferences: (hass: HomeAssistant, preferences: Partial<AITaskPreferences>) => Promise<AITaskPreferences>;
export declare const generateDataAITask: <T = string>(callService: HomeAssistant["callService"], task: GenDataTask) => Promise<GenDataTaskResult<T>>;
export declare const evaluateAITask: (hass: HomeAssistant, task: EvaluationTask) => Promise<EvaluationTaskResult>;
