import { App } from './components/App';
import { dispatch } from './store';
import { getSearchParam } from './utils';

document.body.append(<App />);

addEventListener('popstate', () =>
  dispatch('search', getSearchParam())
);
