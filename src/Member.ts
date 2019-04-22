import { Group } from './Group';
import { HaveEvent } from './HaveEvent';
import { Profile } from './Profile';
import { Empty } from './types';
import { User } from './User';

export class Member extends HaveEvent(Empty) implements HaveEvent {
  public readonly events: string[] = [
    'prebuild',
    'postbuild',
    'predestroy',
    'postdestroy'
  ];

  public readonly user: User;

  public readonly group: Group;

  public readonly profile: Profile;

  public constructor(user: User, group: Group, profile?: Profile) {
    super();

    this.emit('prebuild', { user, group, profile });

    this.user = user;
    this.group = group;
    this.profile = profile;

    this.user.add(this);
    this.group.add(this);

    this.emit('postbuild', { build: this });
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
    this.emit('predestroy', { destroy: this });

    this.group.delete(this);
    this.user.delete(this);

    this.emit('postdestroy', { destroy: this });
  }
}
