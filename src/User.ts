import { HaveEvent } from './HaveEvent';
import { HaveMember } from './HaveMember';
import { Identity } from './Identity';

export class User extends HaveMember(HaveEvent(Identity))
  implements HaveMember {}
