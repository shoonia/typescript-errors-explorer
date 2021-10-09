import { getState, dispatch } from '../store';

export const Input = () => {
  const onInput = ({ target }) => {
    const { allMessages } = getState();
    const value = target.value.trim();

    const messages = allMessages.filter((i) => {
      return i.code.startsWith(value);
    });

    setTimeout(() => {
      dispatch('data/update', { messages });
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
      />
    </label>
  );
}
