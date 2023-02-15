import { getSearchParam, getData } from '../utils';

const LIMIT = Math.ceil(window.innerHeight / 70);

const searchMessages = (messages, search) => {
  return messages.filter(
    (i) => i.code.startsWith(search) || i.message.toLowerCase().includes(search),
  );
};

export const appModule = async (store) => {
  store.on('@init', () => {
    return {
      isLoad: false,
      allMessages: [],
      messages: [],
      search: getSearchParam(),
      start: 0,
      end: 0,
    };
  });

  store.on('set/search', ({ allMessages }, search) => {
    return {
      search,
      messages: searchMessages(allMessages, search),
      start: 0,
      end: LIMIT,
    };
  });

  store.on('set/scroll', ({ messages, end }) => {
    if (messages.length > end) {
      return {
        start: end,
        end: end + LIMIT,
      };
    }
  });

  const allMessages = await getData();
  const { search } = store.get();

  store.set({
    isLoad: true,
    allMessages,
    messages: searchMessages(allMessages, search),
    end: LIMIT,
  });
};
