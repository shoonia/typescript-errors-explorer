import { signal } from 'jsx-dom-runtime';

import { connect } from '../../store';
import s from './styles.module.css';

export const Counter: JSX.FC = () => {
  const total = signal(0);
  const current = signal(0);

  const off = connect('all', ({ all, isLoad }) => {
    if (isLoad) off();
    total.set(all.length);
  });

  connect('items', ({ items }) =>
    current.set(items.length),
  );

  return (
    <div class={s.box}>
      {current}
      <b>/</b>
      {total}
    </div>
  );
};
