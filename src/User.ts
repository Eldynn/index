import { Identity } from './Identity';
import { Member } from './Member';
import { Membership } from './Membership';

export class User extends Identity implements Membership {
  public members: Set<Member>;

  public constructor(
    id: string,
    name: string,
    surname?: string,
    phoneNumber?: string
  ) {
    super(id, name, surname, phoneNumber);

    this.members = new Set<Member>();
  }

  public add(member: Member): User {
    this.members.add(member);

    return this;
  }

  public delete(member: Member): User {
    this.members.delete(member);

    return this;
  }

  public destroy(): void {
    this.members.forEach((member): void => member.destroy());
  }
}
