import type { StoreonModule } from 'storeon-velo';
import type { State, Events } from './types'
import { getSearchParam, getData, IMessage } from '../utils';

const LIMIT = Math.ceil(window.innerHeight / 70);

const searchMessages = (messages: IMessage[], search: string): IMessage[] => {
  return messages.filter(
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

  store.on('set/search', ({ allMessages }, search) => {
    return {
      search,
      messages: searchMessages(allMessages, search),
      start: 0,
      end: LIMIT,
    };
  });

  store.on('set/scroll', ({ messages, end }) => {
    if (messages.length > end) {
      return {
        start: end,
        end: end + LIMIT,
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
