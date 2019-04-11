import { Member } from './Member';
import { Identity } from './Identity';

export abstract class HaveMembers extends Identity {
  private readonly members: Set<Member> = new Set<Member>();

  public add(member: Member): void {
    this.members.add(member);
  }

  public delete(member: Member): void {
    this.members.delete(member);
  }

  public destroy(): void {
    this.members.forEach((member): void => member.destroy());
    this.members.clear();
  }

  public get size(): number {
    return this.members.size;
  }

  public has(member: Member): boolean {
    return this.members.has(member);
  }
}
