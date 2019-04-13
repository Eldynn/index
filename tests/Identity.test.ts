import { Identity } from '../src/Identity';

class Test extends Identity {}

const id = '00d2a85c-0c2e-4387-aa22-c455f35444f5';

test('id', (): void => {
  const test = new Test(id);

  expect(test.id).toBe(id);
});
