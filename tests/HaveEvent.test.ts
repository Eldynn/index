import { HaveEvent } from '../src/HaveEvent';
import { Empty } from '../src/types';

class Test extends HaveEvent(Empty) {
  public readonly events: string[] = ['preadd', 'postadd'];

  public add(added: boolean): void {
    this.emit('preadd', { added });

    const res = !added;

    this.emit('postadd', { added: res });
  }
}

describe('HaveEvent', (): void => {
  test('constructor', (): void => {
    const test = new Test();

    expect(test.events).toEqual(['preadd', 'postadd']);
  });

  test('on', (): void => {
    const data = { id: '00d2a85c-0c2e-4387-aa22-c455f35444f5' };
    const a = jest.fn();
    const b = jest.fn();
    const c = jest.fn();

    const test = new Test();

    test.on('preadd', a, data);

    test.on('notInTheEventsList', b, data);

    test.on('postadd', c);

    test.add(false);

    expect(a).toHaveBeenCalledWith(data, { added: false });
    expect(b).not.toHaveBeenCalled();
    expect(c).toHaveBeenCalledWith(undefined, { added: true });
  });

  test('emit', (): void => {
    const data = { id: '00d2a85c-0c2e-4387-aa22-c455f35444f5' };

    const test = new Test();

    test.on(
      'preadd',
      (save: {}, result: {}): void => {
        expect(save).toEqual(data);
        expect(result).toEqual({ added: false });
      },
      data
    );

    test.on(
      'postadd',
      (save: {}, result: {}): void => {
        expect(save).toEqual(data);
        expect(result).toEqual({ added: true });
      },
      data
    );

    test.add(false);
  });
});
