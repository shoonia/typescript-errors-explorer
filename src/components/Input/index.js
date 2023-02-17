import { useRef } from 'jsx-dom-runtime'
import * as s from './styles.module.css';
import { dispatch, connect } from '../../store';

export const Input = () => {
  const ref = useRef();
  const url = new URL(location.href);

  const onInput = (event) => {
    const search = event.target.value.trim().toLowerCase();

    if (search) {
      url.searchParams.set('q', search);
    } else {
      url.searchParams.delete('q')
    }

    history.pushState(null, null, url.href);
    dispatch('set/search', search);
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
}
