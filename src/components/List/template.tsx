export const template = (target: string) => {
  if (target.length < 1) {
    return (s: string) => s;
  }

  const tmp = target.replace(/[[\](){}|\\.*^?+]/g, (i) => '\\' + i);
  const regExp = new RegExp(tmp, 'i');

  return (source: string) => {
    const match = source.match(regExp);

    if (Array.isArray(match)) {
      return (
        <>
          {source.slice(0, match.index)}
          <mark>{match[0]}</mark>
          {source.slice((match.index ?? 0) + target.length)}
        </>
      );
    }

    return source;
  };
};
