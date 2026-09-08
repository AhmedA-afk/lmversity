/**
 * Home-page motion: staggered hero lines, counting stats, and sections that
 * settle into place as they enter the viewport. Motion is the vanilla engine
 * behind Framer Motion; the site has no React, so this is the honest way to
 * use it. Everything here is decoration on content that is already painted:
 * with reduced motion, or without JavaScript, nothing is hidden.
 */
import { animate, inView, stagger } from 'motion';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function startHomeMotion() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js-motion');

  const lines = document.querySelectorAll<HTMLElement>('[data-hero-line]');
  if (lines.length) {
    animate(
      lines,
      { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0px)'] },
      { delay: stagger(0.09, { startDelay: 0.08 }), duration: 0.75, ease: EASE_OUT },
    );
  }

  // Belt and braces: whatever happens to the animations (a throttled tab, an
  // engine quirk), nothing on this page stays hidden for more than a moment.
  setTimeout(() => {
    document.querySelectorAll<HTMLElement>('[data-hero-line], [data-reveal-item], .closing[data-reveal]').forEach((el) => {
      if (getComputedStyle(el).opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; }
    });
  }, 3000);

  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count || '0');
    const done = () => { el.textContent = target.toLocaleString(); };
    if (!Number.isFinite(target) || target <= 0) return done();
    inView(el, () => {
      animate(0, target, {
        duration: 1.3,
        ease: EASE_OUT,
        onUpdate: (v: number) => { el.textContent = Math.round(v).toLocaleString(); },
        onComplete: done,
      });
      return undefined;
    }, { amount: 0.6 });
  });

  inView(
    '[data-reveal]',
    (el) => {
      const kids = el.querySelectorAll<HTMLElement>('[data-reveal-item]');
      const targets = kids.length ? kids : [el as HTMLElement];
      animate(
        targets,
        { opacity: [0, 1], transform: ['translateY(14px)', 'translateY(0px)'] },
        { delay: stagger(0.07), duration: 0.6, ease: EASE_OUT },
      );
      return undefined;
    },
    { margin: '0px 0px -8% 0px' },
  );
}
