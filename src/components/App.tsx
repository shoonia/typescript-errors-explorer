import { _header, _content } from './styles.module.css';
import { Input } from './Input';
import { Counter } from './Counter';
import { List } from './List';
import { Footer } from './Footer';
import { SupportUkraine } from './SupportUkraine';
import { Analytics } from './Analytics';
import { readyStore } from '../store';

export const App: JSX.FC = () =>
  <>
    <header class={_header}>
      <SupportUkraine />
    </header>
    <main ref={readyStore} class={_content}>
      <h1>
        TypeScript errors explorer
      </h1>
      <Input />
      <Counter />
      <List />
    </main>
    <Footer />
    <Analytics />
  </>;
