export class Handler {
  public readonly save: {};

  public readonly callback: (save: {}, result: {}) => void;

  public constructor(save: {}, callback: (save: {}, result: {}) => void) {
    this.save = save;
    this.callback = callback;
  }

  public fire(result: {}): void {
    this.callback(this.save, result);
  }
}
