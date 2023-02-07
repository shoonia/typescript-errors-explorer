import * as s from './styles.module.css';
import { readyStore } from './store';
import { Input } from './components/Input';
import { List } from './components/List';

<document.body>
  <main class={s.box}>
    <h1>
      TypeScript errors explorer
    </h1>
    <div class={s.field}>
      <Input />
    </div>
    <List />
  </main>
</document.body>;

readyStore();
