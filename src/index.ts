import { Group } from './Group';
import { Identity } from './Identity';
import { Id } from './types';
import { User } from './User';

export class Index {
  public readonly users: Set<User>;

  public readonly groups: Set<Group>;

  private readonly items: Map<Id, Identity>;

  public constructor() {
    this.items = new Map<Id, Identity>();
    this.users = new Set<User>();
    this.groups = new Set<Group>();
  }

  /**
   * Add a [[Group]] or an [[User]] to this [[Index]]
   */
  public add(identity: Identity): Index {
    this.items.set(identity.id, identity);

    if (identity instanceof User) {
      this.users.add(identity);
    } else if (identity instanceof Group) {
      this.groups.add(identity);
    }

    return this;
  }

  /**
   * Delete a [[Group]] or an [[User]] of this [[Index]]
   */
  public delete(identity: Identity): Index {
    this.items.delete(identity.id);

    if (identity instanceof User) {
      this.users.delete(identity);
    } else if (identity instanceof Group) {
      this.groups.delete(identity);
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
