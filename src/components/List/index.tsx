import * as s from './styles.module.css';
import { connect } from '../../store';
import { template } from './template';

export const List: FC = () => {
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

      messages.slice(start, end).forEach((i) => {
        items.append(
          <li class={s.item}>
            <code>
              {markUp(i.code)}: {markUp(i.category)}
            </code>
            <p class={s.message}>
              {markUp(i.message)}
            </p>
          </li>
        );
      });

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
