/** Original LMVersity mark, sculpted from the source SVG; no invented logo geometry.
 * Finite assembly, weighted pointer response, and demand-driven rendering.
 * Resting, hidden, and offscreen scenes consume no animation frames.
 */
import { AmbientLight, DirectionalLight, ExtrudeGeometry, Group, Mesh, MeshStandardMaterial, OrthographicCamera, Scene, Vector3, WebGLRenderer, SRGBColorSpace } from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

export async function mountHero(container: HTMLElement): Promise<() => void> {
  const response = await fetch('/brand/emblem-sculpture.svg');
  if (!response.ok) throw new Error('Logo unavailable');
  const svg = await response.text();
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(0, 0);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.appendChild(renderer.domElement);
  const scene = new Scene();
  const camera = new OrthographicCamera(-6, 6, 6, -6, 0.1, 80);
  camera.position.set(0, 0, 22);
  const light = new DirectionalLight(0xffffff, 3.1);
  light.position.set(-5, 8, 12);
  const fill = new DirectionalLight(0xdde5ff, 1.4);
  fill.position.set(8, -2, 5);
  scene.add(light, fill, new AmbientLight(0xffffff, 1.1));

  const ground = new MeshStandardMaterial({ color: '#3B54A3', roughness: 0.38, metalness: 0.24 });
  const letters = new MeshStandardMaterial({ color: '#FBFAF8', roughness: 0.34, metalness: 0.12 });
  const brass = new MeshStandardMaterial({ color: '#A8741C', roughness: 0.3, metalness: 0.5 });
  const assembly = new Group();
  const mark = new Group();
  assembly.add(mark);
  scene.add(assembly);
  const meshes: Array<{ mesh: Mesh; z: number; delay: number; star: boolean }> = [];
  const data = new SVGLoader().parse(svg);
  for (const path of data.paths) {
    const cls = path.userData?.node?.getAttribute('class') || '';
    const isGround = cls.includes('ground');
    const star = cls.includes('asterisk');
    const geometry = new ExtrudeGeometry(path.toShapes(), {
      depth: isGround ? 55 : 26, bevelEnabled: true,
      bevelThickness: isGround ? 12 : 2.5, bevelSize: isGround ? 10 : 2.5,
      bevelSegments: 4, curveSegments: 28, steps: 1,
    });
    geometry.computeBoundingBox();
    const center = new Vector3();
    geometry.boundingBox!.getCenter(center);
    geometry.translate(-center.x, -center.y, -center.z);
    const mesh = new Mesh(geometry, isGround ? ground : star ? brass : letters);
    const z = isGround ? 0 : star ? 130 : 88;
    mesh.position.set(center.x - 765, center.y - 729, z);
    mark.add(mesh);
    meshes.push({ mesh, z, delay: isGround ? 0 : star ? 0.25 : meshes.length * 0.06, star });
  }
  mark.scale.set(0.012, -0.012, 0.012);
  let raf = 0, disposed = false, visible = true;
  let targetX = -0.12, targetY = -0.20, x = -0.12, y = -0.20;
  let started = performance.now();
  const duration = 1700;
  const schedule = () => { if (!raf && !disposed && visible && !document.hidden) raf = requestAnimationFrame(frame); };
  function frame(now: number) {
    raf = 0;
    if (disposed || !visible || document.hidden) return;
    const p = Math.min(1, (now - started) / duration);
    x += (targetX - x) * 0.065;
    y += (targetY - y) * 0.065;
    assembly.rotation.set(x + (1 - p) * 0.10, y - (1 - p) * 0.15, -0.065);
    for (let i = 0; i < meshes.length; i++) {
      const item = meshes[i];
      const progress = Math.max(0, Math.min(1, (p - item.delay) / (1 - item.delay)));
      const remaining = Math.pow(1 - progress, 4);
      item.mesh.position.z = item.z + remaining * (i ? 170 : -70);
      if (item.star) item.mesh.rotation.z = remaining * -0.9;
    }
    renderer.render(scene, camera);
    container.classList.add('is-live');
    if (p < 1 || Math.abs(x - targetX) + Math.abs(y - targetY) > 0.0002) schedule();
  }
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    const half = aspect < 1 ? 6.1 / aspect : 6.1;
    camera.left = -half * aspect; camera.right = half * aspect;
    camera.top = half; camera.bottom = -half;
    camera.updateProjectionMatrix(); schedule();
  }
  const ro = new ResizeObserver(resize); ro.observe(container); resize();
  const move = (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    targetX = -0.12 + (e.clientY / innerHeight - 0.5) * 0.18;
    targetY = -0.20 + (e.clientX / innerWidth - 0.5) * 0.32;
    schedule();
  };
  const reset = () => { targetX = -0.12; targetY = -0.20; schedule(); };
  window.addEventListener('pointermove', move, { passive: true });
  document.documentElement.addEventListener('pointerleave', reset);
  const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); });
  io.observe(container);
  const recolor = () => {
    const style = getComputedStyle(document.documentElement);
    ground.color.set(style.getPropertyValue('--brand-cool').trim());
    brass.color.set(style.getPropertyValue('--brand-warm').trim());
    schedule();
  };
  const mo = new MutationObserver(recolor);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  const scheme = matchMedia('(prefers-color-scheme: dark)');
  scheme.addEventListener('change', recolor);
  document.addEventListener('visibilitychange', schedule);
  const lost = (event: Event) => { event.preventDefault(); dispose(); };
  renderer.domElement.addEventListener('webglcontextlost', lost);
  function dispose() {
    if (disposed) return;
    disposed = true; cancelAnimationFrame(raf);
    ro.disconnect(); io.disconnect(); mo.disconnect();
    scheme.removeEventListener('change', recolor);
    window.removeEventListener('pointermove', move);
    document.documentElement.removeEventListener('pointerleave', reset);
    document.removeEventListener('visibilitychange', schedule);
    renderer.domElement.removeEventListener('webglcontextlost', lost);
    for (const { mesh } of meshes) mesh.geometry.dispose();
    ground.dispose(); letters.dispose(); brass.dispose(); renderer.dispose();
    renderer.domElement.remove(); container.classList.remove('is-live');
  }
  recolor(); schedule();
  return dispose;
}
