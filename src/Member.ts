import { Group } from './Group';
import { User } from './User';

export class Member {
  public readonly user: User;

  public readonly group: Group;

  public constructor(user: User, group: Group) {
    this.user = user;
    this.group = group;

    this.user.add(this);
    this.group.add(this);
  }

  public static build(user: User, group: Group): Member {
    return new Member(user, group);
  }

  public destroy(): void {
    this.group.delete(this);
    this.user.delete(this);
  }
}
