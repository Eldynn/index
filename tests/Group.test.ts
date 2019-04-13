import { Group } from '../src/Group';
import { User } from '../src/User';

const ids = [
  '00d2a85c-0c2e-4387-aa22-c455f35444f5',
  '00d2a85c-0c2e-4387-aa22-c455f35444f6'
];

test('constructor', (): void => {
  const user = new User(ids[0]);
  const group = new Group(ids[1], user);

  expect(group.owner).toBe(user);
  expect(group.owner.size).toBe(0);
});
