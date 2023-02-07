export const getData = async () => {
  const url = 'https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json';
  const response = await fetch(url);

  return response.json();
};

export const getSearchParam = () => {
  const q = new URLSearchParams(location.search);

  return q.has('q') ? q.get('q') : '';
}
