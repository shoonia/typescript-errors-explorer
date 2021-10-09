import { getState, dispatch } from '../store';

export const Input = () => {
  const state = getState();
  const p = location.pathname;

  const onInput = ({ target }) => {
    setTimeout(() => {
      const search = target.value.trim().toLowerCase();
      const q = search === '' ? p : `${p}?q=${decodeURIComponent(search)}`;

      history.pushState(null, null, q);
      dispatch('set/search', search);
    });
  };

  return (
    <label>
      <div>
        Error code
      </div>
      <input
        type="text"
        class="search"
        onInput={onInput}
        value={state.search}
      />
    </label>
  );
}
