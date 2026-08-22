import { render } from 'jsx-dom-runtime';
import { App } from './components/App';
import { dispatch } from './store';
import { getSearchParam } from './utils';

render(<App />, document.body);

addEventListener('popstate', () =>
  dispatch('search', getSearchParam()),
);
