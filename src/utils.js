export const getData = async () => {
  const response = await fetch('https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json');
  const data = await response.json()

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

export const getSearchParam = () => {
  return new URL(location.href).searchParams.get('q') || ''
}
