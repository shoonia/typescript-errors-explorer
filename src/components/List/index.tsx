import { FC, Fragment } from 'jsx-dom-runtime';
import * as s from './styles.module.css';
import { connect } from '../../store';

const template = (target: string) => {
  if (target.length < 1) {
    return (s: string) => s;
  }

  const tmp = target.replace(/[\[\]()\|\\.*\^\?\+]/g, (i) => '\\' + i);
  const regExp = new RegExp(tmp, 'i');

  return (source: string) => {
    const match = source.match(regExp);

    if (Array.isArray(match)) {
      return (
        <>
          {source.slice(0, match.index)}
          <mark>{match[0]}</mark>
          {source.slice(match.index ?? 0 + target.length)}
        </>
      )
    }

    return source;
  };
};

export const List: FC = () => {
  const mount = (node: HTMLUListElement) => {
    connect('start', 'end', ({ isLoad, messages, search, start, end }) => {
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

      const items = messages.slice(start, end).reduce((frg, i) => {
        frg.append(
          <li class={s.item}>
            <code>
              {markUp(i.code)}: {markUp(i.category)}
            </code>
            <p class={s.message}>
              {markUp(i.message)}
            </p>
          </li>
        );

        return frg;
      }, Fragment({}));

      if (start) {
        node.append(items);
      } else {
        node.replaceChildren(items);
      }
    });
  };

  return (
    <ul class={s.list} ref={mount} />
  );
};
