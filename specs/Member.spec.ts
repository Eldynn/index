import { User } from '../src/User';
import { Group } from '../src/Group';
import { GroupType, MemberType } from '../src/types';

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

test('constructor', (): void => {
  user.members.forEach(
    (member): void => {
      expect(member.user).toBe(user);
      expect(member.type).toBe(MemberType.OWNER);
      expect(member.group).toBe(group);
    }
  );

  expect(user.members.size).toBe(1);
  expect(group.members.size).toBe(1);
});

test('destroy', (): void => {
  user.members.forEach(
    (member): void => {
      member.destroy();
    }
  );

  expect(user.members.size).toBe(0);
  expect(group.members.size).toBe(0);
});
