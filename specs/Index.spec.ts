import Index from '../src/index';

const index = new Index.Index();

const user = new Index.User(
  '62d2a85c-0c2e-4387-aa22-c455f35444f5',
  'SuperNameA',
  'SuperSurnameA',
  '+33 1 22 33 44 55'
);

const group = new Index.Group(
  '00d2a85c-0c2e-4387-aa22-c455f35444f5',
  'SuperNameGroup',
  user,
  Index.GroupType.TEMPORARY
);

test('add User', (): void => {
  expect(index.users.size).toBe(0);

  index.add(user);

  expect(index.users.size).toBe(1);
});

test('add Group', (): void => {
  expect(index.groups.size).toBe(0);

  index.add(group);

  expect(index.groups.size).toBe(1);
});

test('get User', (): void => {
  expect(index.get(user.id)).toBe(user);
});

test('delete User', (): void => {
  index.delete(user);

  expect(index.get(user.id)).toBeUndefined();
});

test('get Group', (): void => {
  expect(index.get(group.id)).toBe(group);
});

test('delete Group', (): void => {
  index.delete(group);

  expect(index.get(group.id)).toBeUndefined();
});
