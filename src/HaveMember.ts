import { HaveEvent } from './HaveEvent';
import { Member } from './Member';
import { Constructor, Id } from './types';

interface HaveMember {
  events: {};

  size: number;

  add(member: Member): void;

  delete(member: Member): void;

  destroy(): void;

  has(member: Member): boolean;

  get(id: Id): Member;
}

const HaveMember = <T extends Constructor<{} & HaveEvent>>(
  Base: T
): Constructor<HaveMember> & T => {
  return class extends Base implements HaveMember, HaveEvent {
    public readonly events: string[] = [
      'preadd',
      'postadd',
      'predelete',
      'postdelete',
      'predestroy',
      'postdestroy'
    ];

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
      this.emit('preadd', { add: member });

      this.members.set(member.user.id, member);

      this.emit('postadd', { add: member });
    }

    /**
     * Delete a member.
     */
    public delete(member: Member): void {
      this.emit('predelete', { delete: member });

      this.members.delete(member.user.id);

      this.emit('postdelete', { delete: member });
    }

    /**
     * Destroy all members.
     */
    public destroy(): void {
      this.emit('predestroy', { destroy: this });

      this.members.forEach((member): void => member.destroy());
      this.members.clear();

      this.emit('postdestroy', { destroy: this });
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
};

export { HaveMember };
