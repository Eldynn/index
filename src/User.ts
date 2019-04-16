import { HaveMembers } from './HaveMembers';
import { Profile } from './Profile';
import { Id } from './types';
import { Identity } from './Identity';

export class User extends HaveMembers(Identity) {
  public readonly profile: Profile;

  public constructor(id: Id, profile?: Profile) {
    super(id);

    this.profile = profile;
  }
}
