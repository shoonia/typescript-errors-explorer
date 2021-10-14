import * as s from './styles.module.css';
import { connect } from '../../store';

const template = (target) => {
  if (target.length < 1) {
    return (s) => s;
  }

  const tmp = target.replace(/[\[\]()\|\\.*\^\?\+]/g, (i) => '\\' + i);
  const regExp = new RegExp(tmp, 'i');

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
    connect('messages', ({ isLoad, messages, search }) => {
      if (isLoad && messages.length < 1) {
        return node.replaceChildren(
          <li class={s.item}>
            <p>
              <em>Not Found</em>
            </p>
          </li>
        );
      }

      const markUp = template(search);

      const List = messages.reduce((Fragment, i) =>
        <Fragment>
          <li class={s.item}>
            <code>
              {markUp(`${i.code}: ${i.category}`)}
            </code>
            <p class={s.message}>
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
    <ul class={s.list} ref={mount} />
  );
};
