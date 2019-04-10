import { User } from '../src/User';

const configuration = {
  id: '62d2a85c-0c2e-4387-aa22-c455f35444f5',
  name: 'SuperName',
  phoneNumber: '+33 1 22 33 44 55',
  surname: 'SuperSurname'
};

const userA = new User(
  configuration.id,
  configuration.name,
  configuration.surname,
  configuration.phoneNumber
);

const userB = new User(
  configuration.id,
  configuration.name,
  null,
  configuration.phoneNumber
);

test('constructor', (): void => {
  expect(userA.id).toBe(configuration.id);
  expect(userA.name).toBe(configuration.name);
  expect(userA.surname).toBe(configuration.surname);
  expect(userA.phoneNumber).toBe(configuration.phoneNumber);

  expect(userB.id).toBe(configuration.id);
  expect(userB.name).toBe(configuration.name);
  expect(userB.surname).toBeNull();
  expect(userB.phoneNumber).toBe(configuration.phoneNumber);
});

test('displayName', (): void => {
  expect(userA.displayName()).toBe(`${userA.name} (${userA.surname})`);

  expect(userB.displayName()).toBe(userB.name);
});
