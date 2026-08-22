import { dispatch } from '../../store';
import s from './styles.module.css';

export const Footer: JSX.FC = () => {
  const ready: JSX.Ref<HTMLElement> = (node) =>
    new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch('scroll');
        }
      }),
    ).observe(node);

  return (
    <footer
      ref={ready}
      class={s.footer}
    />
  );
};
