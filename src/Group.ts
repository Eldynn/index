import { Identity } from './Identity';
import { Member } from './Member';
import { Membership } from './Membership';
import { GroupType, MemberType } from './types';
import { User } from './User';

export class Group extends Identity implements Membership {
  private owner: User;

  private type: GroupType;

  public members: Set<Member>;

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
    this.members = new Set<Member>();

    Member.build(owner, MemberType.OWNER, this);
  }

  public add(member: Member): Group {
    this.members.add(member);

    return this;
  }

  public delete(member: Member): Group {
    this.members.delete(member);

    return this;
  }

  public destroy(): void {
    this.members.forEach((member): void => member.destroy());
  }
}
