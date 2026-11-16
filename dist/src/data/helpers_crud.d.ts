import { deleteCounter, fetchCounter, updateCounter } from "./counter";
import { deleteInputBoolean, fetchInputBoolean, updateInputBoolean } from "./input_boolean";
import { deleteInputButton, fetchInputButton, updateInputButton } from "./input_button";
import { deleteInputDateTime, fetchInputDateTime, updateInputDateTime } from "./input_datetime";
import { deleteInputNumber, fetchInputNumber, updateInputNumber } from "./input_number";
import { deleteInputSelect, fetchInputSelect, updateInputSelect } from "./input_select";
import { deleteInputText, fetchInputText, updateInputText } from "./input_text";
import { deleteSchedule, fetchSchedule, updateSchedule } from "./schedule";
import { deleteTimer, fetchTimer, updateTimer } from "./timer";
export declare const HELPERS_CRUD: {
    input_boolean: {
        fetch: typeof fetchInputBoolean;
        update: typeof updateInputBoolean;
        delete: typeof deleteInputBoolean;
    };
    input_button: {
        fetch: typeof fetchInputButton;
        update: typeof updateInputButton;
        delete: typeof deleteInputButton;
    };
    input_text: {
        fetch: typeof fetchInputText;
        update: typeof updateInputText;
        delete: typeof deleteInputText;
    };
    input_number: {
        fetch: typeof fetchInputNumber;
        update: typeof updateInputNumber;
        delete: typeof deleteInputNumber;
    };
    input_datetime: {
        fetch: typeof fetchInputDateTime;
        update: typeof updateInputDateTime;
        delete: typeof deleteInputDateTime;
    };
    input_select: {
        fetch: typeof fetchInputSelect;
        update: typeof updateInputSelect;
        delete: typeof deleteInputSelect;
    };
    counter: {
        fetch: typeof fetchCounter;
        update: typeof updateCounter;
        delete: typeof deleteCounter;
    };
    timer: {
        fetch: typeof fetchTimer;
        update: typeof updateTimer;
        delete: typeof deleteTimer;
    };
    schedule: {
        fetch: typeof fetchSchedule;
        update: typeof updateSchedule;
        delete: typeof deleteSchedule;
    };
};
