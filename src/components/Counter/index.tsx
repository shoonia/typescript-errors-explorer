import { type FC, useText } from 'jsx-dom-runtime';
import * as s from './styles.module.css';
import { connect } from '../../store';

export const Counter: FC = () => {
  const [total, setTotal] = useText('0');
  const [current, setCurret] = useText('0');

  connect('allMessages', ({ allMessages }) => {
    setTotal(allMessages.length);
  });

  connect('messages', ({ messages }) => {
    setCurret(messages.length);
  });

  return (
    <div class={s.box}>
      {current}
      <b>/</b>
      {total}
    </div>
  );
};
