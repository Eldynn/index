import { Identity } from './Identity';
import { Member } from './Member';

export interface Membership {
  members: Set<Member>;

  add(member: Member): Identity;

  delete(member: Member): Identity;

  destroy(): void;
}
