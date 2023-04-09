import { App } from './components/App';
import { dispatch, readyStore } from './store';
import { getSearchParam } from './utils';

document.body.append(<App ready={readyStore} />);

window.addEventListener('popstate', () => {
  dispatch('on/search', getSearchParam());
});
