import { Member } from './Member';
import { Identity } from './Identity';
export declare abstract class HaveMembers extends Identity {
    private readonly members;
    add(member: Member): void;
    delete(member: Member): void;
    destroy(): void;
    readonly size: number;
    has(member: Member): boolean;
}
