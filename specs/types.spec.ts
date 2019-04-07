import { GroupType, MemberType } from '../src/types';

test('GroupType', (): void => {
  expect(GroupType.PERMANENT).toBe(0);
  expect(GroupType.TEMPORARY).toBe(1);
});

test('MemberType', (): void => {
  expect(MemberType.OWNER).toBe(0);
  expect(MemberType.PERMANENT).toBe(1);
  expect(MemberType.TEMPORARY).toBe(2);
});
