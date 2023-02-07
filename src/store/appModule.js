import { getSearchParam, getData } from '../utils';

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
    };
  });

  store.on('set/search', ({ allMessages }, search) => {
    return {
      search,
      messages: searchMessages(allMessages, search),
    };
  });

  const data = await getData();
  const allMessages = transformMessages(data);
  const { search } = store.get();

  store.set({
    isLoad: true,
    allMessages,
    messages: searchMessages(allMessages, search),
  });
};
