import { useText } from 'jsx-dom-runtime';

import * as s from './styles.module.css';
import { connect } from '../../store';

export const Counter: JSX.FC = () => {
  const [total, setTotal] = useText('0');
  const [current, setCurret] = useText('0');

  connect('all', ({ all }) =>
    setTotal(`${all.length}`)
  );

  connect('items', ({ items }) =>
    setCurret(`${items.length}`)
  );

  return (
    <div class={s.box}>
      {current}
      <b>/</b>
      {total}
    </div>
  );
};
