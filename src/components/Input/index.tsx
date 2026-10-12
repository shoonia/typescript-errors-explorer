import { signal } from 'jsx-dom-runtime';

import { connect, dispatch } from '../../store';
import s from './styles.module.css';

const url = new URL(location.href);

export const Input: JSX.FC = () => {
  const value = signal();
  const input: JSX.InputEventListener<HTMLInputElement> = (event) => {
    const search = event.currentTarget.value.trim().toLowerCase();

    if (search) {
      url.searchParams.set('q', search);
    } else {
      url.searchParams.delete('q');
    }

    history.pushState('', '', url.href);
    dispatch('search', search);
  };

  connect('search', (state) => {
    value.set(state.search);
  });

  return (
    <form on:submit={(e) => e.preventDefault()}>
      <search>
        <label class={s.label}>
          <div class={s.title}>
            Error code or message
          </div>
          <input
            prop:value={value}
            on:input={input}
            type="search"
            name="search"
            class={s.search}
            placeholder="code or message"
            maxLength="250"
          />
        </label>
      </search>
    </form>
  );
};
