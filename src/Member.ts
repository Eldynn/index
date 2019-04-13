import { Group } from './Group';
import { User } from './User';
import { Profile } from './Profile';

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

  public static build(user: User, group: Group, profile?: Profile): Member {
    return new Member(user, group, profile);
  }

  public destroy(): void {
    this.group.delete(this);
    this.user.delete(this);
  }
}
