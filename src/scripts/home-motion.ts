import { animate, inView, stagger } from 'motion';

/** A single entrance for the opening composition, then selective typographic reveals.
 * Content remains visible in CSS. Reduced motion cancels active effects at runtime.
 */
export function startHomeMotion() {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches) return;
  const running: ReturnType<typeof animate>[] = [];
  const ease = [0.22, 1, 0.36, 1] as const;
  const lines = document.querySelectorAll<HTMLElement>('[data-hero-line]');
  running.push(animate(lines, { opacity: [0, 1], transform: ['translateY(26px)', 'translateY(0px)'] }, {
    duration: 1, delay: stagger(0.10), ease,
  }));
  const stop = inView('[data-reveal]', (el) => {
    running.push(animate(el, { opacity: [0.25, 1], transform: ['translateY(22px)', 'translateY(0px)'] }, { duration: 0.85, ease }));
  }, { margin: '0px 0px -40px 0px', amount: 0.15 });
  const cleanup = () => {
    stop();
    for (const animation of running) animation.complete();
    preference.removeEventListener('change', change);
  };
  const change = () => { if (preference.matches) cleanup(); };
  preference.addEventListener('change', change);
  window.addEventListener('pagehide', cleanup, { once: true });
}
