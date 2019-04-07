import { Group } from '../src/Group';
import { GroupType } from '../src/types';
import { User } from '../src/User';

const user = new User(
  '62d2a85c-0c2e-4387-aa22-c455f35444f5',
  'SuperNameA',
  'SuperSurnameA',
  '+33 1 22 33 44 55'
);

const group = new Group(
  '00d2a85c-0c2e-4387-aa22-c455f35444f5',
  'SuperNameGroup',
  user,
  GroupType.TEMPORARY
);

test('destroy', (): void => {
  expect(user.members.size).toBe(1);
  expect(group.members.size).toBe(1);

  group.destroy();

  expect(user.members.size).toBe(0);
  expect(group.members.size).toBe(0);
});
