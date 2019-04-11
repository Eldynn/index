import { Id } from './types';

export abstract class Identity {
  public readonly id: Id;

  public constructor(id: Id) {
    this.id = id;
  }
}
