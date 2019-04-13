import { Member } from './Member';
import { Identity } from './Identity';

export abstract class HaveMembers extends Identity {
  private readonly members: Set<Member> = new Set<Member>();

  /**
   * Add a member.
   */
  public add(member: Member): void {
    this.members.add(member);
  }

  /**
   * Delete a member.
   */
  public delete(member: Member): void {
    this.members.delete(member);
  }

  /**
   * Destroy all members.
   */
  public destroy(): void {
    this.members.forEach((member): void => member.destroy());
    this.members.clear();
  }

  /**
   * Number of members.
   */
  public get size(): number {
    return this.members.size;
  }

  /**
   * Is this have a member.
   */
  public has(member: Member): boolean {
    return this.members.has(member);
  }
}
