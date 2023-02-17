import * as s from './styles.module.css';
import { Input } from './Input';
import { Counter } from './Counter';
import { List } from './List';
import { Footer } from './Footer';

export const App = (
  <main class={s.content}>
    <h1>
      TypeScript errors explorer
    </h1>
    <Input />
    <Counter />
    <List />
    <Footer />
  </main>
);
