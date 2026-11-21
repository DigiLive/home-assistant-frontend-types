/** Handle DOM and styles of the editable circle (MapEngine.addEditableCircle) */
/** Hit target for the radius handle; comfortably above touch minimums */
export declare const RESIZE_HANDLE_SIZE = 24;
/** The visible dot inside the hit target */
export declare const RESIZE_HANDLE_DOT_SIZE = 12;
/** Relative radius change per arrow key press on the handle */
export declare const RESIZE_KEY_STEP = 0.1;
/** Advertised slider maximum; a larger radius raises it (see the engine) */
export declare const RADIUS_ARIA_MAX = 100000;
export declare const createResizeHandleElement: (label?: string) => HTMLElement;
/** Styles for the handles, included by ha-map for both engines */
export declare const editableCircleStyles = "\n  .editable-circle-center {\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: var(--primary-color);\n    border: 2px solid var(--card-background-color, #fff);\n    box-sizing: border-box;\n    box-shadow: var(--ha-box-shadow-s);\n  }\n  .editable-circle-resize {\n    width: 24px;\n    height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: ew-resize;\n  }\n  .editable-circle-resize-dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: var(--card-background-color, #fff);\n    border: 2px solid var(--primary-color);\n    box-sizing: border-box;\n    box-shadow: var(--ha-box-shadow-s);\n  }\n";
