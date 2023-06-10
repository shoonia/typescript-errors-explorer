import * as s from './styles.module.css';
import { connect } from '../../store';
import { template } from './template';

export const List: JSX.FC = () => {
  const ready = (node: HTMLUListElement) => {
    connect('start', 'end', ({ isLoad, items, search, start, end }) => {
      if (isLoad && items.length < 1) {
        return node.replaceChildren(
          <li class={s.item}>
            <p>
              <em>Not Found</em>
            </p>
          </li>
        );
      }

      const markUp = template(search);
      const fragment = <></>;

      for (let i = start; i < end; i++) {
        const item = items[i];

        fragment.append(
          <li class={s.item}>
            <code>
              {markUp(item.code)}: {markUp(item.category)}
            </code>
            <p class={s.message}>
              {markUp(item.message)}
            </p>
          </li>
        );
      }

      if (start) {
        node.append(fragment);
      } else {
        node.replaceChildren(fragment);
      }
    });
  };

  return (
    <ul class={s.list} ref={ready} />
  );
};
