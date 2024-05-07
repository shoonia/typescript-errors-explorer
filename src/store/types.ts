import type { IMessage } from '../utils';

export interface Events {
  'search': string;
  'scroll': never;
}

export interface State {
  readonly isLoad: boolean;
  readonly all: readonly IMessage[];
  readonly items: readonly IMessage[];
  readonly search: string;
  readonly start: number;
  readonly end: number;
}
