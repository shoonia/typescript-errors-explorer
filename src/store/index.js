import { createStoreon } from 'storeon-velo';

import { appModule } from './appModule';
import { getSearchParam } from './utils';

export const { dispatch, connect, readyStore } = createStoreon([
  appModule,
]);

window.addEventListener('popstate', () => {
  dispatch('set/search', getSearchParam());
});
