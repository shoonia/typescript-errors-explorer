export interface IMessage {
  readonly message: string;
  readonly code: string;
  readonly category: string;
}

export const getData = async (): Promise<IMessage[]> => {
  const response = await fetch('https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json');
  const data = await response.json();

  const messages: IMessage[] = [];

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

export const getSearchParam = (): string => {
  return new URLSearchParams(location.search).get('q') || '';
};
