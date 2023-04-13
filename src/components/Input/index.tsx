import { useRef } from 'jsx-dom-runtime'

import * as s from './styles.module.css';
import { dispatch, connect } from '../../store';

export const Input: FC = () => {
  const ref = useRef<HTMLInputElement>();
  const url = new URL(location.href);

  const onInput: EventListener = () => {
    const search = ref.current.value.trim().toLowerCase();

    if (search) {
      url.searchParams.set('q', search);
    } else {
      url.searchParams.delete('q');
    }

    history.pushState(null, '', url.href);
    dispatch('on/search', search);
  };

  connect('search', (state) => {
    ref.current.value = state.search;
  });

  return (
    <label class={s.label}>
      <div class={s.title}>
        Error code or message
      </div>
      <input
        ref={ref}
        type="text"
        class={s.search}
        oninput={onInput}
        placeholder="code or message"
      />
    </label>
  );
};
