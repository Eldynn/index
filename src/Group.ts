import { HaveMembers } from './HaveMembers';
import { Member } from './Member';
import { Id } from './types';
import { User } from './User';

export class Group extends HaveMembers {
  public readonly owner: User;

  public constructor(id: Id, owner: User) {
    super(id);

    this.owner = owner;

    Member.build(owner, this);
  }
}
