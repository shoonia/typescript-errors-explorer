import * as s from './styles.module.css';

export const SupportUkraine: JSX.FC = () =>
  <div class={s.box}>
    <a href="https://u24.gov.ua/" class={s.link}>
      <svg aria-label="flag of Ukraine" viewBox="0 0 3 2" width="2em">
        <path fill="#005bbb" d="M0 0h3v1H0z" />
        <path fill="#ffd500" d="M0 1h3v1H0z" />
      </svg>
      Support Ukraine
    </a>
  </div>;
