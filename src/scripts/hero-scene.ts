/**
 * The home-page hero: the LMV monogram, built in three dimensions from its own
 * SVG paths (monogram-solid.svg: the export's clipped rectangles resolved to
 * their clip shapes, which SVGLoader would otherwise ignore). Flat extruded blocks, face-on through an orthographic camera (the
 * identity is flat and orthogonal, so no perspective), tilting a few degrees
 * toward the pointer, with the brass asterisk turning slowly and a foundation
 * grid of small squares drifting behind at a different depth.
 *
 * Colours are read from the CSS tokens at mount and again whenever the theme
 * changes, so the scene follows light and dark like everything else on the
 * site. The canvas is transparent; the page paints the ground.
 *
 * Loaded lazily after idle by HeroScene.astro, and only when the reader has
 * not asked for reduced motion. The inline SVG fallback stays underneath.
 */
import {
  Color,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  Vector3,
  WebGLRenderer,
  Box3,
} from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#3B54A3';

interface Palette { cool: Color; coolSide: Color; warm: Color; warmSide: Color; rule: Color }

function palette(): Palette {
  const cool = new Color(token('--brand-cool'));
  const warm = new Color(token('--brand-warm'));
  const rule = new Color(token('--rule'));
  return {
    cool,
    coolSide: cool.clone().multiplyScalar(0.62),
    warm,
    warmSide: warm.clone().multiplyScalar(0.62),
    rule,
  };
}

export function mountHero(container: HTMLElement): () => void {
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  const renderer = new WebGLRenderer({ antialias: dpr < 1.5, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.appendChild(renderer.domElement);

  const scene = new Scene();
  // Frustum in "scene units": the monogram is normalised to ~10 units wide.
  const camera = new OrthographicCamera(-7, 7, 7, -7, 0.1, 100);
  camera.position.set(0, 0, 20);
  camera.lookAt(0, 0, 0);

  let pal = palette();
  const letterMat = [new MeshBasicMaterial({ color: pal.cool }), new MeshBasicMaterial({ color: pal.coolSide })];
  const astMat = [new MeshBasicMaterial({ color: pal.warm }), new MeshBasicMaterial({ color: pal.warmSide })];
  const gridMat = new MeshBasicMaterial({ color: pal.rule, side: DoubleSide });

  const mark = new Group();
  scene.add(mark);
  let asterisk: Mesh | null = null;

  // Foundation grid, behind the mark, at its own depth so it parallaxes less.
  const GRID = 9;
  const grid = new InstancedMesh(new PlaneGeometry(0.42, 0.42), gridMat, GRID * GRID);
  const dummy = new Object3D();
  let i = 0;
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      dummy.position.set((x - (GRID - 1) / 2) * 1.5, (y - (GRID - 1) / 2) * 1.5, -6);
      dummy.updateMatrix();
      grid.setMatrixAt(i++, dummy.matrix);
    }
  }
  grid.instanceMatrix.needsUpdate = true;
  scene.add(grid);

  fetch('/brand/monogram-solid.svg')
    .then((r) => r.text())
    .then((svg) => {
      const data = new SVGLoader().parse(svg.replace(/currentColor/g, '#000000'));
      for (const path of data.paths) {
        const cls = (path.userData?.node as Element | undefined)?.getAttribute('class') ?? '';
        const shapes = SVGLoader.createShapes(path);
        if (!shapes.length) continue;
        const geo = new ExtrudeGeometry(shapes, { depth: 60, bevelEnabled: false, curveSegments: 6 });
        const isAst = cls.includes('wm-ast');
        const mesh = new Mesh(geo, isAst ? astMat : letterMat);
        if (isAst) {
          // Give the asterisk its own pivot so it can turn in place.
          geo.computeBoundingBox();
          const c = new Vector3();
          geo.boundingBox!.getCenter(c);
          geo.translate(-c.x, -c.y, -c.z);
          mesh.position.copy(c);
          asterisk = mesh;
        }
        mark.add(mesh);
      }
      // SVG is y-down; flip, then normalise to ~10 units wide and centre.
      mark.scale.set(1, -1, 1);
      const box = new Box3().setFromObject(mark);
      const size = new Vector3();
      box.getSize(size);
      const s = 10 / size.x;
      mark.scale.multiplyScalar(s);
      const box2 = new Box3().setFromObject(mark);
      const centre = new Vector3();
      box2.getCenter(centre);
      mark.position.sub(centre);
      baseScale = Math.abs(mark.scale.x);
      markOffsetY = mark.position.y;
      container.classList.add('is-live');
      entrance = performance.now();
    })
    .catch(() => {
      /* fallback SVG remains visible */
    });

  // Pointer tilt, lerped so it feels weighted rather than glued to the cursor.
  let targetX = 0;
  let targetY = 0;
  let curX = 0;
  let curY = 0;
  // Relative to the viewport, so the tilt is gentle wherever the pointer is,
  // and it relaxes to flat when the pointer leaves the window.
  const onMove = (e: PointerEvent) => {
    const nx = (e.clientX / innerWidth) * 2 - 1;
    const ny = (e.clientY / innerHeight) * 2 - 1;
    targetY = nx * 0.2;
    targetX = ny * 0.14;
  };
  const onLeave = (e: MouseEvent) => { if (!e.relatedTarget) { targetX = 0; targetY = 0; } };
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('mouseout', onLeave);

  function resize() {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    const half = 7;
    camera.left = -half * aspect;
    camera.right = half * aspect;
    camera.top = half;
    camera.bottom = -half;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  // Theme changes: recolour in place.
  function recolour() {
    pal = palette();
    letterMat[0].color.copy(pal.cool);
    letterMat[1].color.copy(pal.coolSide);
    astMat[0].color.copy(pal.warm);
    astMat[1].color.copy(pal.warmSide);
    gridMat.color.copy(pal.rule);
  }
  const mo = new MutationObserver(recolour);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  const mq = matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', recolour);

  // Only draw while visible.
  let visible = true;
  const io = new IntersectionObserver((entries) => { visible = entries[0]?.isIntersecting ?? true; }, { threshold: 0.05 });
  io.observe(container);

  let entrance = 0;
  let raf = 0;
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

  // Safety net for weak GPUs and software rendering: if frames are slow once
  // the mark is loaded, give up and leave the static fallback in place.
  let slowFrames = 0;
  let lastNow = 0;

  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) { lastNow = 0; return; }
    if (mark.children.length && lastNow) {
      if (now - lastNow > 50) slowFrames++; else slowFrames = Math.max(0, slowFrames - 1);
      if (slowFrames > 12) { teardown(); return; }
    }
    lastNow = now;

    curX += (targetX - curX) * 0.06;
    curY += (targetY - curY) * 0.06;
    const bob = Math.sin(now / 1900) * 0.12;
    mark.rotation.x = curX;
    mark.rotation.y = curY;
    mark.position.y = markOffsetY + bob;

    if (entrance) {
      const t = Math.min(1, (now - entrance) / 900);
      const k = (0.92 + 0.08 * ease(t)) * baseScale;
      mark.scale.set(k, -k, k);
      if (t >= 1) entrance = 0;
    }

    if (asterisk) asterisk.rotation.z = now / 3200;

    grid.rotation.x = curX * 0.35;
    grid.rotation.y = curY * 0.35;
    grid.position.x = -curY * 1.2;
    grid.position.y = curX * 1.2;

    renderer.render(scene, camera);
  }

  // The entrance scale is applied on top of the normalised scale, set on load.
  let baseScale = 1;
  let markOffsetY = 0;

  function teardown() {
    cancelAnimationFrame(raf);
    container.classList.remove('is-live');
    ro.disconnect();
    mo.disconnect();
    io.disconnect();
    mq.removeEventListener('change', recolour);
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('mouseout', onLeave);
    renderer.dispose();
    renderer.domElement.remove();
  }

  raf = requestAnimationFrame(frame);
  return teardown;
}
