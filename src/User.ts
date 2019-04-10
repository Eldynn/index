import { HaveMembers } from './HaveMembers';
import { Status } from './types';

export class User extends HaveMembers {
  private status: Status;
}
