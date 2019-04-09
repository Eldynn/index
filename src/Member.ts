import { Group } from './Group';
import { MemberType } from './types';
import { User } from './User';

export class Member {
  public user: User;

  public type: MemberType;

  public group: Group;

  public static build(user: User, type: MemberType, group: Group): Member {
    return new Member(user, type, group);
  }

  public constructor(user: User, type: MemberType, group: Group) {
    this.user = user;
    this.type = type;
    this.group = group;

    this.user.add(this);
    this.group.add(this);
  }

  public destroy(): void {
    this.group.delete(this);
    this.user.delete(this);
  }
}
