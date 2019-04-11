import { Group } from './Group';
import { User } from './User';
export declare class Member {
    readonly user: User;
    readonly group: Group;
    constructor(user: User, group: Group);
    static build(user: User, group: Group): Member;
    destroy(): void;
}
