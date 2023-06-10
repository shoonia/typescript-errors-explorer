import * as s from './styles.module.css';
import { connect } from '../../store';
import { template } from './template';

export const List: JSX.FC = () => {
  const ready = (node: HTMLUListElement) => {
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
      const items = <></>;

      for (let i = start; i < end; i++) {
        const msg = messages[i];

        items.append(
          <li class={s.item}>
            <code>
              {markUp(msg.code)}: {markUp(msg.category)}
            </code>
            <p class={s.message}>
              {markUp(msg.message)}
            </p>
          </li>
        );
      }

      if (start) {
        node.append(items);
      } else {
        node.replaceChildren(items);
      }
    });
  };

  return (
    <ul class={s.list} ref={ready} />
  );
};
