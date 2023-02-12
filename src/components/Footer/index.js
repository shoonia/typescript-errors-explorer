import { dispatch } from '../../store';

export const Footer = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch('set/scroll');
      }
    });
  });

  const mount = (node) => {
    observer.observe(node);
  };

  return (
    <div ref={mount} style={{ height: '100px' }} />
  );
}
