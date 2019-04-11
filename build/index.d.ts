import { Group } from './Group';
import { Identity } from './Identity';
import { Id } from './types';
import { User } from './User';
declare class Index {
    readonly users: Set<User>;
    readonly groups: Set<Group>;
    private readonly items;
    constructor();
    add(identity: Identity): Index;
    delete(identity: Identity): Index;
    get(id: Id): Identity;
}
declare const _default: {
    Group: typeof Group;
    Index: typeof Index;
    User: typeof User;
};
export default _default;
