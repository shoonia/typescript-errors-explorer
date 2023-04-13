import * as s from './styles.module.css';
import { Input } from './Input';
import { Counter } from './Counter';
import { List } from './List';
import { Footer } from './Footer';
import { SupportUkraine } from './SupportUkraine';

interface Props {
  ready: (node: HTMLElement) => void;
}

export const App: FC<Props> = ({ ready }) => (
  <>
  <header class={s.header}>
    <SupportUkraine />
  </header>
  <main ref={ready} class={s.content}>
    <h1>
      TypeScript errors explorer
    </h1>
    <Input />
    <Counter />
    <List />
    <Footer />
  </main>
  </>
);
