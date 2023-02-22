import { App } from './components/App';
import { dispatch, readyStore } from './store';
import { getSearchParam } from './utils';

document.body.append(<App />);

window.addEventListener('popstate', () => {
  dispatch('set/search', getSearchParam());
});

readyStore();
