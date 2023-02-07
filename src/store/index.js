import { createStoreon } from 'storeon-velo';
import { appModule } from './appModule';

export const { dispatch, connect, readyStore } = createStoreon([
  appModule,
]);
