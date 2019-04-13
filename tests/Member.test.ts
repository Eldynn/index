import { User } from '../src/User';
import { Group } from '../src/Group';
import { Member } from '../src/Member';

const ids = [
  '00d2a85c-0c2e-4387-aa22-c455f35444f5',
  '00d2a85c-0c2e-4387-aa22-c455f35444f6'
];

test('constructor', (): void => {
  const user = new User(ids[0]);
  const group = new Group(ids[1], user);
  const member = new Member(user, group);

  expect(member.user).toBe(user);
  expect(member.group).toBe(group);
  expect(member.user.has(member)).toBe(true);
  expect(member.group.has(member)).toBe(true);
});

test('build', (): void => {
  const user = new User(ids[0]);
  const group = new Group(ids[1], user);
  const member = Member.build(user, group);

  expect(member.user).toBe(user);
  expect(member.group).toBe(group);
  expect(member.user.has(member)).toBe(true);
  expect(member.group.has(member)).toBe(true);
});

test('destroy', (): void => {
  const user = new User(ids[0]);
  const group = new Group(ids[1], user);
  const member = Member.build(user, group);

  member.destroy();

  expect(member.user.has(member)).toBe(false);
  expect(member.group.has(member)).toBe(false);
});
