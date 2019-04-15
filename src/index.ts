import { Group } from './Group';
import { Identity } from './Identity';
import { Id } from './types';
import { User } from './User';

export class Index {
  public readonly users: Map<Id, User>;

  public readonly groups: Map<Id, Group>;

  private readonly items: Map<Id, Identity>;

  public constructor() {
    this.items = new Map<Id, Identity>();
    this.users = new Map<Id, User>();
    this.groups = new Map<Id, Group>();
  }

  /**
   * Add a [[Group]] or an [[User]] to this [[Index]]
   */
  public add(identity: Identity): Index {
    this.items.set(identity.id, identity);

    if (identity instanceof User) {
      this.users.set(identity.id, identity);
    } else if (identity instanceof Group) {
      this.groups.set(identity.id, identity);
    }

    return this;
  }

  /**
   * Delete a [[Group]] or an [[User]] of this [[Index]]
   */
  public delete(identity: Identity): Index {
    this.items.delete(identity.id);

    if (identity instanceof User) {
      this.users.delete(identity.id);
    } else if (identity instanceof Group) {
      this.groups.delete(identity.id);
    }

    return this;
  }

  /**
   * Get a [[Group]] or an [[User]] of this [[Index]]
   */
  public get(id: Id): Identity {
    return this.items.get(id);
  }
}

export { Group } from './Group';
export { User } from './User';
export { Profile } from './Profile';
export { Member } from './Member';
