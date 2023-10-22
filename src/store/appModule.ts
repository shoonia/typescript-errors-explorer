import type { StoreonModule } from 'storeon-velo';

import type { State, Events } from './types'
import { getSearchParam, getData, IMessage } from '../utils';

const LIMIT = Math.ceil(window.innerHeight / 90);

const searchMessages = (all: IMessage[], search: string): IMessage[] => {
  return all.filter(
    (i) => i.code.startsWith(search) || i.message.toLowerCase().includes(search),
  );
};

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

  store.on('on/search', ({ all, search }, newSearch) => {
    if (search !== newSearch) {
      return {
        search: newSearch,
        items: searchMessages(all, newSearch),
        start: 0,
        end: LIMIT,
      };
    }
  });

  store.on('on/scroll', ({ items, end }) => {
    const len = items.length;

    if (len > end) {
      const max = end + LIMIT;

      return {
        start: end,
        end: max < len ? max : len,
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
