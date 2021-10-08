import { createRef } from 'jsx-dom-runtime';

import './styles.css';
import { connect } from './store';
import { Input } from './components/Input';

const Root = createRef();

<document.body>
  <h1>
    TypeScript errors explorer
  </h1>
  <div>
    <Input />
  </div>
  <ul ref={Root} />
</document.body>;

connect('messages', ({ messages }) => {
  const List = <></>;

  for (const key in messages) {
    const i = messages[key];

    <List>
      <li>
        <code>{key}</code>
        :
        <mark>{i.category}</mark>
        <div>{i.message}</div>
      </li>
    </List>;
  }

  Root.current.replaceChildren(List);
});
