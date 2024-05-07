window.dataLayer = [];

function gtag(a: string, b: unknown): void {
  window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-2W35Q7B86C');

export const Analytics: JSX.FC = () =>
  process.env.NODE_ENV === 'production'
    ? <script async src="https://www.googletagmanager.com/gtag/js?id=G-2W35Q7B86C" />
    : null;
