import { createStoreon } from 'storeon-velo';

import type { Events, State } from './types';
import { appModule } from './appModule';

export const { dispatch, connect, readyStore } = createStoreon<State, Events>([
  appModule,
]);
