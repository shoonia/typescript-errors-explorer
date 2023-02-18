import * as s from './styles.module.css';
import { dispatch } from '../../store';

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

export const Footer = (
  <footer ref={mount} class={s.footer} />
);
