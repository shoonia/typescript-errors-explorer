import { connect } from '../store';

const template = (target) => {
  if (target.length < 1) {
    return (s) => s;
  }

  const regExp = new RegExp(target, 'i');

  return (source) => {
    const match = source.match(regExp);

    if (Array.isArray(match)) {
      return [
        source.slice(0, match.index),
        <mark>{match[0]}</mark>,
        source.slice(match.index + target.length),
      ];
    }

    return source;
  };
};

export const List = () => {
  const mount = (node) => {
    connect('messages', ({ messages, search }) => {
      const markUp = template(search);

      const List = messages.reduce((Fragment, i) =>
        <Fragment>
          <li class="item">
            <code>
              {markUp(`${i.code}: ${i.category}`)}
            </code>
            <p class="message">
              {markUp(i.message)}
            </p>
          </li>
        </Fragment>,
        <></>
      );

      node.replaceChildren(List);
    });
  };

  return (
    <ul class="list" ref={mount} />
  );
};
