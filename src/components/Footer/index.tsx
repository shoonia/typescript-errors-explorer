import type { FC } from 'jsx-dom-runtime';
import * as s from './styles.module.css';
import { dispatch } from '../../store';

export const Footer: FC = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch('set/scroll');
      }
    });
  });

  const mount = (node: HTMLElement) => {
    observer.observe(node);
  };

  return (
    <footer ref={mount} class={s.footer} />
  );
}
