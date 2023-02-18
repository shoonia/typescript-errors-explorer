import * as s from './styles.module.css';
import { dispatch } from '../../store';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      dispatch('set/scroll');
    }
  });
});

export const Footer = (
  <footer
    ref={(node) => observer.observe(node)}
    class={s.footer}
  />
);
