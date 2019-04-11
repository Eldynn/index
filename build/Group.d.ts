import { HaveMembers } from './HaveMembers';
import { Id } from './types';
import { User } from './User';
export declare class Group extends HaveMembers {
    readonly owner: User;
    constructor(id: Id, owner: User);
}
