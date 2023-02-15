import { App } from './components/App';
import { dispatch, readyStore } from './store';

document.body.append(<App />);

window.addEventListener('popstate', (event) => {
  dispatch('set/search', getSearchParam());
});

readyStore();
