import { createStoreon } from 'storeon-velo';

import { appModule } from './appModule';

export const { getState, dispatch, connect, readyStore } = createStoreon([
  appModule,
]);
