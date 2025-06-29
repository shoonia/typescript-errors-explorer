import type { StoreonModule } from 'storeon-velo';

import type { State, Events } from './types';
import { getSearchParam, getData, IMessage } from '../utils';

const LIMIT = Math.ceil(window.innerHeight / 90);

const searchMessages = (all: readonly IMessage[], search: string): readonly IMessage[] =>
  all.filter(
    (i) => i.code.startsWith(search) || i.message.toLowerCase().includes(search),
  );

export const appModule: StoreonModule<State, Events> = async (store) => {
  store.on('@init', () => {
    return {
      isLoad: false,
      all: [],
      items: [],
      search: getSearchParam(),
      start: 0,
      end: 0,
    };
  });

  store.on('search', ({ all, search }, newSearch) => {
    if (search !== newSearch) {
      return {
        search: newSearch,
        items: searchMessages(all, newSearch),
        start: 0,
        end: LIMIT,
      };
    }
  });

  store.on('scroll', ({ items, end }) => {
    if (items.length > end) {
      return {
        start: end,
        end: end + LIMIT,
      };
    }
  });

  const all = await getData();
  const { search } = store.get();

  store.set({
    isLoad: true,
    all,
    items: searchMessages(all, search),
    end: LIMIT,
  });
};
