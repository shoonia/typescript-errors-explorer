import { getSearchParam, getData } from '../utils';

const LIMIT = Math.ceil(window.innerHeight / 70);

const transformMessages = (data) => {
  const messages = [];

  for (const key in data) {
    const i = data[key];

    messages.push({
      message: key,
      code: `${i.code}`,
      category: i.category,
    });
  }

  return messages;
};

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

  const data = await getData();
  const allMessages = transformMessages(data);
  const { search } = store.get();

  store.set({
    isLoad: true,
    allMessages,
    messages: searchMessages(allMessages, search),
    end: LIMIT,
  });
};
