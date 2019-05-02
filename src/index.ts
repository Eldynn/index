import { Group } from './Group';
import { Identity } from './Identity';
import { Id, Property } from './types';
import { User } from './User';

export class Index {
  public readonly users: Map<Id, User>;

  public readonly groups: Map<Id, Group>;

  private readonly items: Map<Id, Identity>;

  private readonly properties: Property[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly itemsBy: Map<Property, Map<any, Identity>>;

  /**
   * @param properties List of properties to track in [[Identity]] [[Profile]]
   */
  public constructor(properties: Property[] = []) {
    this.items = new Map<Id, Identity>();
    this.users = new Map<Id, User>();
    this.groups = new Map<Id, Group>();

    this.properties = properties;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.itemsBy = new Map<Property, Map<any, Identity>>();
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

    this.properties.forEach(
      (property: Property): void => {
        if (Object.prototype.hasOwnProperty.call(identity.profile, property)) {
          if (!this.itemsBy.has(property)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.itemsBy.set(property, new Map<any, Identity>());
          }

          this.itemsBy.get(property).set(identity.profile[property], identity);
        }
      }
    );

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

  /**
   * Get an [[Identity]] by a tracked [[Property]] value
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getBy(property: Property, value: any): Identity {
    let res: Identity = null;

    if (this.itemsBy.has(property)) {
      res = this.itemsBy.get(property).get(value);
    }

    return res;
  }
}

export { Group } from './Group';
export { User } from './User';
export { Member } from './Member';
