import { HaveEvent } from './HaveEvent';
import { HaveMember } from './HaveMember';
import { Identity } from './Identity';
import { Id, Profile } from './types';
import { User } from './User';

export class Group extends HaveMember(HaveEvent(Identity))
  implements HaveMember {
  public readonly owner: User;

  public constructor(id: Id, owner: User, profile?: Profile) {
    super(id, profile);

    this.owner = owner;
  }
}
