import { getState, dispatch } from '../store';

export const Input = () => {
  const onInput = ({ target }) => {
    const { allMessages } = getState();
    const value = target.value.trim();

    const messages = {};

    for (const key in allMessages) {
      if (key.startsWith(value)) {
        messages[key] = allMessages[key];
      }
    }

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
