import { HaveMembers } from './HaveMembers';
import { Identity } from './Identity';
import { Profile } from './Profile';
import { Id } from './types';
import { User } from './User';

export class Group extends HaveMembers(Identity) {
  public readonly owner: User;

  public readonly profile: Profile;

  public constructor(id: Id, owner: User, profile?: Profile) {
    super(id);

    this.owner = owner;
    this.profile = profile;
  }
}
