import { getState, dispatch, connect } from '../store';

export const Input = () => {
  const state = getState();

  connect('search', ({ search }) => {
    const p = location.pathname;
    const q = search === '' ? p : `${p}?q=${decodeURIComponent(search)}`;

    history.pushState(null, null, q);
  });

  const onInput = ({ target }) => {
    setTimeout(() => {
      dispatch('set/search', target.value.trim().toLowerCase());
    })
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
