import * as s from './styles.module.css';
import { connect } from '../../store';
import { template } from './template';

export const List: JSX.FC = () => {
  const ready: JSX.Ref<HTMLUListElement> = (node) => {
    connect('start', 'end', ({ isLoad, items, search, start, end }) => {
      const len = items.length;

      if (isLoad && len < 1) {
        return node.replaceChildren(
          <li class={s.item}>
            <p>
              <em>Not Found</em>
            </p>
          </li>,
        );
      }

      const markUp = template(search);
      const fragment = new DocumentFragment();

      for (let i = start, l = end < len ? end : len; i < l; i++) {
        const item = items[i];

        fragment.append(
          <li class={s.item}>
            <code>
              {markUp(item.code)}: {markUp(item.category)}
            </code>
            <p class={s.message}>
              {markUp(item.message)}
            </p>
          </li>,
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
