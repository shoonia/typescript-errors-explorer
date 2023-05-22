import { useRef } from 'jsx-dom-runtime'

import * as s from './styles.module.css';
import { dispatch, connect } from '../../store';

const url = new URL(location.href);

export const Input: FC = () => {
  const ready = (node: HTMLInputElement) => {
    node.addEventListener('input', () => {
      const search = node.value.trim().toLowerCase();

      if (search) {
        url.searchParams.set('q', search);
      } else {
        url.searchParams.delete('q');
      }

      history.pushState(null, '', url.href);
      dispatch('on/search', search);
    });

    connect('search', (state) => {
      node.value = state.search;
    });
  };

  return (
    <label class={s.label}>
      <div class={s.title}>
        Error code or message
      </div>
      <input
        ref={ready}
        type="text"
        class={s.search}
        placeholder="code or message"
      />
    </label>
  );
};
