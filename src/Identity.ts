import { Id } from './types';
import { Profile } from './Profile';

export abstract class Identity {
  public readonly id: Id;

  public constructor(id: Id) {
    this.id = id;
  }
}
