const getData = async () => {
  const link = 'https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json';
  const response = await fetch(link);

  return response.json();
};

const transformMessages = (data) => {
  const messages = {};

  for (const key in data) {
    const i = data[key];

    messages[i.code] = {
      message: key,
      category: i.category,
    };
  }

  return messages;
};

export const appModule = async ({ on, dispatch }) => {
  on('@init', () => {
    return {
      allMessages: {},
      messages: {},
    };
  });

  on('data/update', (_, data) => data);

  try {
    const data = await getData();
    const allMessages = transformMessages(data);

    dispatch('data/update', {
      allMessages,
      messages: allMessages,
    });
  } catch {
    // ...
  }
};
