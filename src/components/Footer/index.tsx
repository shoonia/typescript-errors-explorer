import * as s from './styles.module.css';
import { dispatch } from '../../store';

export const Footer: FC = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch('on/scroll');
      }
    });
  });

  return (
    <footer
      ref={(node) => observer.observe(node)}
      class={s.footer}
    />
  );
};
