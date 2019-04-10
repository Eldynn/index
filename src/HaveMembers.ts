import { Identity } from './Identity';
import { Member } from './Member';

export abstract class HaveMembers extends Identity {
  private members: Set<Member> = new Set<Member>();

  public add(member: Member): void {
    this.members.add(member);
  }

  public delete(member: Member): void {
    this.members.delete(member);
  }

  public destroy(): void {
    this.members.forEach((member): void => member.destroy());
  }
}
