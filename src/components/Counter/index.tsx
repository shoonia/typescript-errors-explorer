import { useText } from 'jsx-dom-runtime';

import { connect } from '../../store';
import s from './styles.module.css';

export const Counter: JSX.FC = () => {
  const [total, setTotal] = useText(0);
  const [current, setCurrent] = useText(0);

  const off = connect('all', ({ all, isLoad }) => {
    if (isLoad) off();
    setTotal(all.length);
  });

  connect('items', ({ items }) =>
    setCurrent(items.length),
  );

  return (
    <div class={s.box}>
      {current}
      <b>/</b>
      {total}
    </div>
  );
};
