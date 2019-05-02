import { Id, Profile } from './types';

export class Identity {
  public readonly id: Id;

  public readonly profile: Profile;

  public constructor(id: Id, profile?: Profile) {
    this.id = id;

    this.profile = profile;
  }
}
