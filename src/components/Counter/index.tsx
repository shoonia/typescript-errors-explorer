import { useText } from 'jsx-dom-runtime';

import { _box } from './styles.module.css';
import { connect } from '../../store';

export const Counter: JSX.FC = () => {
  const [total, setTotal] = useText('0');
  const [current, setCurret] = useText('0');

  const off = connect('all', ({ all }) => {
    if (all.length) off();
    setTotal(`${all.length}`);
  });

  connect('items', ({ items }) =>
    setCurret(`${items.length}`)
  );

  return (
    <div class={_box}>
      {current}
      <b>/</b>
      {total}
    </div>
  );
};
