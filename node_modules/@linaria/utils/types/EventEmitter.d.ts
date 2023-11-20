export type OnEvent = (labels: Record<string, unknown>, type: 'start' | 'finish' | 'single', event?: unknown) => void;
export interface IActionCreated {
    actionIdx: string;
    actionType: string;
    type: 'actionCreated';
}
export interface ICreatedEvent {
    class: string;
    evaluatedOnly: string[];
    filename: string;
    generation: number;
    idx: string;
    isExportsInherited: boolean;
    only: string[];
    parentId: number | null;
    type: 'created';
}
export interface ISupersededEvent {
    type: 'superseded';
    with: number;
}
export interface ISetTransformResultEvent {
    isNull: boolean;
    type: 'setTransformResult';
}
export type EntrypointEvent = IActionCreated | ICreatedEvent | ISupersededEvent | ISetTransformResultEvent;
export type OnEntrypointEvent = (idx: number, timestamp: number, event: EntrypointEvent) => void;
export type OnActionStartArgs = [
    phase: 'start',
    timestamp: number,
    type: string,
    idx: string,
    entrypointRef: string
];
export type OnActionFinishArgs = [
    phase: 'finish' | 'fail',
    timestamp: number,
    id: number,
    isAsync: boolean,
    error?: unknown
];
export declare const isOnActionStartArgs: (args: OnActionStartArgs | OnActionFinishArgs) => args is OnActionStartArgs;
export declare const isOnActionFinishArgs: (args: OnActionStartArgs | OnActionFinishArgs) => args is OnActionFinishArgs;
export interface OnAction {
    (...args: OnActionStartArgs): number;
    (...args: OnActionFinishArgs): void;
}
export declare class EventEmitter {
    protected onEvent: OnEvent;
    protected onAction: OnAction;
    protected onEntrypointEvent: OnEntrypointEvent;
    static dummy: EventEmitter;
    constructor(onEvent: OnEvent, onAction: OnAction, onEntrypointEvent: OnEntrypointEvent);
    action<TRes>(actonType: string, idx: string, entrypointRef: string, fn: () => TRes): TRes;
    entrypointEvent(sequenceId: number, event: EntrypointEvent): void;
    perf<TRes>(method: string, fn: () => TRes): TRes;
    single(labels: Record<string, unknown>): void;
}
