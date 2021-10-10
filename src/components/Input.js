import { getState, dispatch } from '../store';

export const Input = () => {
  const state = getState();
  const p = location.pathname;

  let f;

  const onInput = ({ target }) => {
    cancelAnimationFrame(f);

    f = requestAnimationFrame(() => {
      const search = target.value.trim().toLowerCase();
      const q = search === '' ? p : `${p}?q=${decodeURIComponent(search)}`;

      history.pushState(null, null, q);
      dispatch('set/search', search);
    });
  };

  return (
    <label>
      <div class="label">
        Error code or message
      </div>
      <input
        type="text"
        class="search"
        onInput={onInput}
        placeholder="code or message"
        value={state.search}
      />
    </label>
  );
}
