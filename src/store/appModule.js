const getData = async () => {
  const link = 'https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json';
  const response = await fetch(link);

  return response.json();
};

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

export const appModule = async ({ get, on, dispatch }) => {
  on('@init', () => {
    const q = new URLSearchParams(location.search);

    return {
      isLoad: false,
      allMessages: [],
      messages: [],
      search: q.has('q') ? q.get('q') : '',
    };
  });

  on('data/load', (_, data) => data);

  on('set/search', ({ allMessages }, search) => {
    return {
      search,
      messages: searchMessages(allMessages, search),
    };
  });

  const data = await getData();
  const allMessages = transformMessages(data);
  const { search } = get();

  dispatch('data/load', {
    isLoad: true,
    allMessages,
    messages: searchMessages(allMessages, search),
  });
};
