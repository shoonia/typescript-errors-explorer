import { readyStore } from '../store';
import { Counter } from './Counter';
import { Footer } from './Footer';
import { Input } from './Input';
import { List } from './List';
import s from './styles.module.css';
import { SupportUkraine } from './SupportUkraine';

export const App: JSX.FC = () =>
  <>
    <header class={s.header}>
      <SupportUkraine />
    </header>
    <main ref={readyStore} class={s.content}>
      <h1>
        TypeScript errors explorer
      </h1>
      <Input />
      <Counter />
      <List />
    </main>
    <Footer />
  </>;
