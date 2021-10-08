import { connect } from '../store';

export const List = () => {
  const mount = (node) => {
    connect('messages', ({ messages }) => {
      const List = <></>;

      for (const key in messages) {
        const i = messages[key];

        <List>
          <li class="item">
            <code>{key}</code>
            :
            <code class="category">
              {i.category}
            </code>
            <p class="message">
              {i.message}
            </p>
          </li>
        </List>;
      }

      node.replaceChildren(List);
    });
  };

  return (
    <ul class="list" ref={mount} />
  );
};
