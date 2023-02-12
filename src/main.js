import * as s from './styles.module.css';
import { dispatch, readyStore } from './store';
import { getSearchParam } from './utils';
import { Input } from './components/Input';
import { List } from './components/List';
import { Footer } from './components/Footer';

<document.body>
  <main class={s.content}>
    <h1>
      TypeScript errors explorer
    </h1>
    <Input />
    <List />
    <Footer />
  </main>
</document.body>;

window.addEventListener('popstate', () => {
  dispatch('set/search', getSearchParam());
});

readyStore();
