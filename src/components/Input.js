import { getState, dispatch, connect } from '../store';

export const Input = () => {
  const state = getState();

  connect('search', ({ search }) => {
    const path = search !== ''
      ? `?q=${decodeURIComponent(search)}`
      : '/';

    history.pushState(null, null, path);
  });

  const onInput = ({ target }) => {
    dispatch('set/search', target.value.trim().toLowerCase());
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
