import { Handler } from './Handler';
import { Constructor } from './types';

interface HaveEvent {
  events: string[];

  on(
    event: string,
    callback: (save: {}, result: {}) => void,
    data?: {}
  ): HaveEvent;

  emit(event: string, data?: {}): HaveEvent;
}

const HaveEvent = <T extends Constructor<{}>>(
  Base: T
): Constructor<HaveEvent> & T => {
  return class extends Base implements HaveEvent {
    public readonly events: string[] = [];

    private readonly handlers: Map<string, Handler[]> = new Map<
      string,
      Handler[]
    >();

    public on(
      event: string,
      callback: (save: {}, result: {}) => void,
      save?: {}
    ): HaveEvent {
      if (this.events.includes(event)) {
        if (!this.handlers.has(event)) {
          this.handlers.set(event, []);
        }

        this.handlers.get(event).push(new Handler(save, callback));
      }

      return this;
    }

    public emit(event: string, result?: {}): HaveEvent {
      if (this.handlers.has(event)) {
        this.handlers
          .get(event)
          .forEach((handler): void => handler.fire(result));
      }

      return this;
    }
  };
};

export { HaveEvent };
