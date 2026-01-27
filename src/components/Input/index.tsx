import * as s from './styles.module.css';
import { dispatch, connect } from '../../store';

const url = new URL(location.href);

export const Input: JSX.FC = () => {
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

  const ready: JSX.Ref<HTMLInputElement> = (node) =>
    connect('search', (state) => {
      node.value = state.search;
    });

  return (
    <form on:submit={(e) => e.preventDefault()}>
      <search>
        <label class={s.label}>
          <div class={s.title}>
            Error code or message
          </div>
          <input
            ref={ready}
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
