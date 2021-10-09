import { connect } from '../store';

export const List = () => {
  const mount = (node) => {
    connect('messages', ({ messages }) => {
      const List = messages.reduce((Fragment, i) =>
        <Fragment>
          <li class="item">
            <code>{i.code}</code>
            :
            <code class="category">
              {i.category}
            </code>
            <p class="message">
              {i.message}
            </p>
          </li>
        </Fragment>,
        <></>
      );

      node.replaceChildren(List);
    });
  };

  return (
    <ul class="list" ref={mount} />
  );
};
