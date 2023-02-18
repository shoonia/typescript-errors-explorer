import { useText } from 'jsx-dom-runtime';
import * as s from './styles.module.css';
import { connect } from '../../store';

const [total, setTotal] = useText('0');
const [current, setCurret] = useText('0');

connect('allMessages', ({ allMessages }) => {
  setTotal(allMessages.length.toString());
});

connect('messages', ({ messages }) => {
  setCurret(messages.length.toString());
});

export const Counter = (
  <div class={s.box}>
    {current}
    <b>/</b>
    {total}
  </div>
);
