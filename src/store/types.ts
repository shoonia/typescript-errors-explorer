import type { IMessage } from '../utils';

export interface Events {
  'on/search': string;
  'on/scroll': never;
}

export interface State {
  readonly isLoad: boolean;
  readonly allMessages: IMessage[];
  readonly messages: IMessage[];
  readonly search: string;
  readonly start: number;
  readonly end: number;
}
