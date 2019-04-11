import Index from '../src/index';
import { User } from '../src/User';
import { Group } from '../src/Group';

const ids = [
  '00d2a85c-0c2e-4387-aa22-c455f35444f5',
  '00d2a85c-0c2e-4387-aa22-c455f35444f6'
];

test('add User', (): void => {
  const index = new Index.Index();
  const user = new User(ids[0]);

  expect(index.users.size).toBe(0);

  index.add(user);

  expect(index.users.size).toBe(1);
});

test('add Group', (): void => {
  const index = new Index.Index();
  const user = new User(ids[0]);
  const group = new Group(ids[1], user);

  expect(index.groups.size).toBe(0);

  index.add(group);

  expect(index.groups.size).toBe(1);
});

test('get User', (): void => {
  const index = new Index.Index();
  const user = new User(ids[0]);
  index.add(user);

  expect(index.get(user.id)).toBe(user);
});

test('delete User', (): void => {
  const index = new Index.Index();
  const user = new User(ids[0]);

  index.delete(user);

  expect(index.get(user.id)).toBeUndefined();
});

test('get Group', (): void => {
  const index = new Index.Index();
  const user = new User(ids[0]);
  const group = new Group(ids[1], user);
  index.add(group);

  expect(index.get(group.id)).toBe(group);
});

test('delete Group', (): void => {
  const index = new Index.Index();
  const user = new User(ids[0]);
  const group = new Group(ids[1], user);

  index.delete(group);

  expect(index.get(group.id)).toBeUndefined();
});
