import { HaveMembers } from './HaveMembers';
import { Profile } from './Profile';
import { Id } from './types';

export class User extends HaveMembers {
  public readonly profile: Profile;

  public constructor(id: Id, profile?: Profile) {
    super(id);

    this.profile = profile;
  }
}
