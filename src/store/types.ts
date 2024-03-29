import type { IMessage } from '../utils';

export interface Events {
  'search': string;
  'scroll': never;
}

export interface State {
  readonly isLoad: boolean;
  readonly all: IMessage[];
  readonly items: IMessage[];
  readonly search: string;
  readonly start: number;
  readonly end: number;
}
