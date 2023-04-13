declare global {
  interface Window {
    dataLayer: unknown[];
  }

  type FC<T = Record<string, unknown>> = import('jsx-dom-runtime').FC<T>;
}

export {};
