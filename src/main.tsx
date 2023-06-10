import { App } from './components/App';
import { dispatch } from './store';
import { getSearchParam } from './utils';

document.body.append(<App />);

window.addEventListener('popstate', () =>
  dispatch('on/search', getSearchParam())
);
