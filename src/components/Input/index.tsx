import type { RefCallback } from 'jsx-dom-runtime';

import { _label, _title, _search } from './styles.module.css';
import { dispatch, connect } from '../../store';

const url = new URL(location.href);

export const Input: JSX.FC = () => {
  const ready: RefCallback<HTMLInputElement> = (node) => {
    node.addEventListener('input', () => {
      const search = node.value.trim().toLowerCase();

      if (search) {
        url.searchParams.set('q', search);
      } else {
        url.searchParams.delete('q');
      }

      history.pushState('', '', url.href);
      dispatch('search', search);
    });

    connect('search', (state) => {
      node.value = state.search;
    });
  };

  return (
    <search>
      <label class={_label}>
        <div class={_title}>
          Error code or message
        </div>
        <input
          ref={ready}
          type="search"
          class={_search}
          placeholder="code or message"
          maxLength="250"
        />
      </label>
    </search>
  );
};
