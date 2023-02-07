import * as s from './styles.module.css';
import { readyStore } from './store';
import { Input } from './components/Input';
import { List } from './components/List';

<document.body>
  <main class={s.box}>
    <h1>
      TypeScript errors explorer
    </h1>
    <section class={s.field}>
      <Input />
    </section>
    <section>
      <List />
    </section>
  </main>
</document.body>;

readyStore();
