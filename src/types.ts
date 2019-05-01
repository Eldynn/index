export type Id = string;

export type Property = string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Profile = Record<Property, any>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;

export class Empty {}
