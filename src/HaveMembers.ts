import { Member } from './Member';
import { Identity } from './Identity';
import { Id } from './types';

export abstract class HaveMembers extends Identity {
  private readonly members: Map<Id, Member> = new Map<Id, Member>();

  /**
   * Add a member.
   */
  public add(member: Member): void {
    this.members.set(member.user.id, member);
  }

  /**
   * Delete a member.
   */
  public delete(member: Member): void {
    this.members.delete(member.user.id);
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
    return this.members.has(member.user.id);
  }

  /**
   * Return the member with theid specified.
   */
  public get(id: Id): Member {
    return this.members.get(id);
  }
}
