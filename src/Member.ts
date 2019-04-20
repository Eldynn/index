import { Group } from './Group';
import { Profile } from './Profile';
import { User } from './User';

export class Member {
  public readonly user: User;

  public readonly group: Group;

  public readonly profile: Profile;

  public constructor(user: User, group: Group, profile?: Profile) {
    this.user = user;
    this.group = group;
    this.profile = profile;

    this.user.add(this);
    this.group.add(this);
  }

  /**
   * Build a member the same way of the constructor.
   */
  public static build(user: User, group: Group, profile?: Profile): Member {
    return new Member(user, group, profile);
  }

  /**
   * Destroy this member, and delete it from the group and the user is in.
   */
  public destroy(): void {
    this.group.delete(this);
    this.user.delete(this);
  }
}
