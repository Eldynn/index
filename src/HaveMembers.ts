import { Member } from './Member';
import { Id, Constructor } from './types';

interface HaveMembers {
  size: number;
  
  add(member: Member): void;

  delete(member: Member): void;

  destroy(): void;

  has(member: Member): boolean;

  get(id: Id): Member;
}

const HaveMembers = <T extends Constructor<{}>>(
  Base: T
): Constructor<HaveMembers> & T => {
  return class extends Base {
    private readonly members: Map<Id, Member>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public constructor(...args: any[]) {
      super(...args);

      this.members = new Map<Id, Member>();
    }

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
  };
}

export { HaveMembers };
