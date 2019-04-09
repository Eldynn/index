import { Id } from './types';

export abstract class Identity {
  public id: Id;

  public name: string;

  public surname: string;

  public phoneNumber: string;

  public constructor(
    id: Id,
    name: string,
    surname?: string,
    phoneNumber?: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
  }

  public displayName(): string {
    return `${this.name}${this.surname ? ` (${this.surname})` : ``}`;
  }
}
