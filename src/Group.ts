import { HaveEvent } from './HaveEvent';
import { HaveMember } from './HaveMember';
import { Identity } from './Identity';
import { Profile } from './Profile';
import { Id } from './types';
import { User } from './User';

export class Group extends HaveMember(HaveEvent(Identity))
  implements HaveMember {
  public readonly owner: User;

  public readonly profile: Profile;

  public constructor(id: Id, owner: User, profile?: Profile) {
    super(id);

    this.owner = owner;
    this.profile = profile;
  }
}
