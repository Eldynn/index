import { HaveMembers } from './HaveMembers';
import { Member } from './Member';
import { GroupType, MemberType } from './types';
import { User } from './User';

export class Group extends HaveMembers {
  private owner: User;

  private type: GroupType;

  public constructor(
    id: string,
    name: string,
    owner: User,
    type: GroupType,
    surname?: string,
    phoneNumber?: string
  ) {
    super(id, name, surname, phoneNumber);

    this.owner = owner;
    this.type = type;

    Member.build(owner, MemberType.OWNER, this);
  }
}
