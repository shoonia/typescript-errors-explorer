import { getState, dispatch } from '../store';

export const Input = () => {
  const onInput = ({ target }) => {
    const { allMessages } = getState();
    const search = target.value.trim().toLowerCase();

    const messages = allMessages.filter((i) => {
      return i.code.startsWith(search)
        || i.message.toLowerCase().includes(search);
    });

    setTimeout(() => {
      dispatch('data/update', { messages, search });
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
