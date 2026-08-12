/* Neural Dispatch scrollytelling: low-cost scroll-driven WebGL field; no autonomous animation loop. */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    const field = new THREE.Group();
    const count = window.innerWidth < 700 ? 90 : 180;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const angle = index * 2.399963;
      const radius = 0.2 + (index % 17) * 0.072;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = Math.sin(angle) * radius * 0.66;
      positions[index * 3 + 2] = ((index % 9) - 4) * 0.047;
    }
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({ color: 0xd9dced, size: 0.018, transparent: true, opacity: 0.72, depthWrite: false });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    const loopGeometry = new THREE.TorusGeometry(1.1, 0.0026, 4, 120);
    const loopMaterial = new THREE.MeshBasicMaterial({ color: 0x9fa5c8, transparent: true, opacity: 0.34 });
    const loop = new THREE.Mesh(loopGeometry, loopMaterial);
    loop.rotation.x = Math.PI / 2.72;
    loop.rotation.z = -0.32;
    field.add(points, loop);
    scene.add(field);
    camera.position.z = 3.1;
    const render = () => renderer.render(scene, camera);
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(parent.clientWidth, parent.clientHeight, false);
      camera.aspect = parent.clientWidth / parent.clientHeight;
      camera.updateProjectionMatrix();
      render();
    };
    resize();
    const trigger = ScrollTrigger.create({
      trigger: "#nx3-dispatch",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        field.rotation.y = self.progress * Math.PI * 1.46;
        field.rotation.x = -0.22 + self.progress * 0.32;
        points.rotation.z = self.progress * -0.7;
        loop.rotation.y = self.progress * Math.PI;
        render();
      },
    });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      trigger.kill();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      loopGeometry.dispose();
      loopMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="nx2-motion-field" aria-hidden="true" />;
}
