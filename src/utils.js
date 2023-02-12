export const getData = async () => {
  const url = 'https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json';
  const response = await fetch(url);

  return response.json();
};

export const getSearchParam = () => {
  const q = new URL(location).searchParams;

  return q.has('q') ? q.get('q') : '';
}
