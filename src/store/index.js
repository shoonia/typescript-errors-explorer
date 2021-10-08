import { createStoreon } from 'storeon';
import { storeonConnect } from 'storeon-connect';

import { appModule } from './appModule';

const store = createStoreon([
  appModule,
]);

export const {
  getState,
  dispatch,
  connect,
} = storeonConnect(store);
