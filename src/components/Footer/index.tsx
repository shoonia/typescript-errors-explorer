import * as s from './styles.module.css';
import { dispatch } from '../../store';

export const Footer: FC = () => {
  const ready = (node: HTMLElement) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch('on/scroll');
        }
      });
    }).observe(node);
  }

  return (
    <footer
      ref={ready}
      class={s.footer}
    />
  );
};
