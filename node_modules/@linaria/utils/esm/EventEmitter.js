export const isOnActionStartArgs = args => {
  return args[0] === 'start';
};
export const isOnActionFinishArgs = args => {
  return args[0] === 'finish' || args[0] === 'fail';
};
export class EventEmitter {
  static dummy = new EventEmitter(() => {}, () => 0, () => {});
  constructor(onEvent, onAction, onEntrypointEvent) {
    this.onEvent = onEvent;
    this.onAction = onAction;
    this.onEntrypointEvent = onEntrypointEvent;
  }
  action(actonType, idx, entrypointRef, fn) {
    const id = this.onAction('start', performance.now(), actonType, idx, entrypointRef);
    try {
      const result = fn();
      if (result instanceof Promise) {
        result.then(() => this.onAction('finish', performance.now(), id, true), e => this.onAction('fail', performance.now(), id, true, e));
      } else {
        this.onAction('finish', performance.now(), id, false);
      }
      return result;
    } catch (e) {
      this.onAction('fail', performance.now(), id, false, e);
      throw e;
    }
  }
  entrypointEvent(sequenceId, event) {
    this.onEntrypointEvent(sequenceId, performance.now(), event);
  }
  perf(method, fn) {
    const labels = {
      method
    };
    this.onEvent(labels, 'start');
    const result = fn();
    if (result instanceof Promise) {
      result.then(() => this.onEvent(labels, 'finish'), () => this.onEvent(labels, 'finish'));
    } else {
      this.onEvent(labels, 'finish');
    }
    return result;
  }
  single(labels) {
    this.onEvent({
      ...labels,
      datetime: new Date()
    }, 'single');
  }
}
//# sourceMappingURL=EventEmitter.js.map