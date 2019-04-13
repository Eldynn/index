import { Group } from '../src/Group';
import { HaveMembers } from '../src/HaveMembers';
import { Member } from '../src/Member';
import { User } from '../src/User';

class Test extends HaveMembers {}

const ids = [
  '00d2a85c-0c2e-4387-aa22-c455f35444f5',
  '00d2a85c-0c2e-4387-aa22-c455f35444f6',
  '00d2a85c-0c2e-4387-aa22-c455f35444f7'
];

test('size', (): void => {
  const test = new Test(ids[0]);
  const user = new User(ids[1]);
  const group = new Group(ids[2], user);
  const member = new Member(user, group);

  expect(test.size).toBe(0);

  test.add(member);

  expect(test.size).toBe(1);

  test.add(member);

  expect(test.size).toBe(1);

  test.delete(member);

  expect(test.size).toBe(0);
});

test('has', (): void => {
  const test = new Test(ids[0]);
  const user = new User(ids[1]);
  const group = new Group(ids[2], user);
  const member = new Member(user, group);

  expect(test.has(member)).toBe(false);

  test.add(member);

  expect(test.has(member)).toBe(true);

  test.delete(member);

  expect(test.has(member)).toBe(false);
});

test('add', (): void => {
  const test = new Test(ids[0]);
  const user = new User(ids[1]);
  const group = new Group(ids[2], user);
  const member = new Member(user, group);

  expect(test.size).toBe(0);
  expect(test.has(member)).toBe(false);

  test.add(member);

  expect(test.size).toBe(1);
  expect(test.has(member)).toBe(true);
});

test('delete', (): void => {
  const test = new Test(ids[0]);
  const user = new User(ids[1]);
  const group = new Group(ids[2], user);
  const member = new Member(user, group);

  test.add(member);

  expect(test.size).toBe(1);
  expect(test.has(member)).toBe(true);

  test.delete(member);

  expect(test.size).toBe(0);
  expect(test.has(member)).toBe(false);
});

test('destroy', (): void => {
  const test = new Test(ids[0]);
  const user = new User(ids[1]);
  const group = new Group(ids[2], user);
  const member = new Member(user, group);

  test.add(member);

  expect(test.size).toBe(1);
  expect(test.has(member)).toBe(true);
  expect(user.size).toBe(1);
  expect(user.has(member)).toBe(true);
  expect(group.size).toBe(1);
  expect(group.has(member)).toBe(true);

  test.destroy();

  expect(test.size).toBe(0);
  expect(test.has(member)).toBe(false);
  expect(user.size).toBe(0);
  expect(user.has(member)).toBe(false);
  expect(group.size).toBe(0);
  expect(group.has(member)).toBe(false);
});
