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
      allMessages: [],
      messages: [],
      search: getSearchParam(),
      start: 0,
      end: 0,
    };
  });

  store.on('on/search', ({ allMessages, search }, newSearch) => {
    if (search !== newSearch) {
      return {
        search: newSearch,
        messages: searchMessages(allMessages, newSearch),
        start: 0,
        end: LIMIT,
      };
    }
  });

  store.on('on/scroll', ({ messages, end }) => {
    const len = messages.length;

    if (len > end) {
      const max = end + LIMIT;

      return {
        start: end,
        end: max <= len ? max : len,
      };
    }
  });

  const allMessages = await getData();
  const { search } = store.get();

  store.set({
    isLoad: true,
    allMessages,
    messages: searchMessages(allMessages, search),
    end: LIMIT,
  });
};
