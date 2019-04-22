import { Handler } from '../src/Handler';

describe('Handler', (): void => {
  test('constructor', (): void => {
    const id = { id: '00d2a85c-0c2e-4387-aa22-c455f35444f5' };
    const callback = (): void => {};

    const handler = new Handler(id, callback);

    expect(handler.save).toBe(id);
    expect(handler.callback).toBe(callback);
  });

  test('fire', (): void => {
    const id = { id: '00d2a85c-0c2e-4387-aa22-c455f35444f5' };
    const added = { added: true };

    const callback = (save: {}, result: {}): void => {
      expect(save).toBe(id);
      expect(result).toBe(added);
    };

    const handler = new Handler(id, callback);

    handler.fire(added);
  });
});
