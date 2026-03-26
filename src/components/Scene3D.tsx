import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Interactive Dot Globe ─────────────────────────────── */
function DotGlobe({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Points>(null!);
  const mousePos = useRef(new THREE.Vector3(0, 0, 0));
  const mouseActive = useRef(false);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const mouse2D = useRef(new THREE.Vector2(-10, -10));
  const hitSphere = useMemo(() => new THREE.Sphere(new THREE.Vector3(), 1.8), []);

  const { camera } = useThree();

  const dotCount = 3000;

  // Generate dots on sphere surface using fibonacci spiral
  const { basePositions, positions, colors, sizes } = useMemo(() => {
    const base = new Float32Array(dotCount * 3);
    const pos = new Float32Array(dotCount * 3);
    const col = new Float32Array(dotCount * 3);
    const siz = new Float32Array(dotCount);

    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < dotCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);
      const r = 1.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color: mix of cyan and blue
      const t = Math.random();
      col[i * 3] = 0.02 + t * 0.2;     // R
      col[i * 3 + 1] = 0.4 + t * 0.4;  // G
      col[i * 3 + 2] = 0.8 + t * 0.2;  // B

      siz[i] = 2.0 + Math.random() * 2.0;
    }

    return { basePositions: base, positions: pos, colors: col, sizes: siz };
  }, []);

  const handlePointerMove = useCallback((e: THREE.Event) => {
    // @ts-ignore
    if (e.unprojectedPoint) {
      // @ts-ignore
      mousePos.current.copy(e.unprojectedPoint);
    }
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!meshRef.current) return;

    // Update mouse raycasting
    const pointer = state.pointer;
    mouse2D.current.set(pointer.x, pointer.y);
    raycaster.setFromCamera(mouse2D.current, camera);

    // Find intersection point with an invisible sphere
    const ray = raycaster.ray;
    const sphereCenter = new THREE.Vector3(0, 0, 0);
    const target = new THREE.Vector3();
    const intersects = ray.intersectSphere(
      new THREE.Sphere(sphereCenter, 2.2),
      target
    );

    if (intersects) {
      mousePos.current.copy(target);
      mouseActive.current = true;
    } else {
      mouseActive.current = false;
    }

    // Rotate globe based on scroll + time
    meshRef.current.rotation.y = scrollProgress * Math.PI * 3 + t * 0.15;
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;

    // Update positions with distortion
    const posAttr = meshRef.current.geometry.getAttribute("position");
    const colAttr = meshRef.current.geometry.getAttribute("color");
    const sizAttr = meshRef.current.geometry.getAttribute("size");

    // Transform mouse position to local space
    const localMouse = mousePos.current.clone();
    meshRef.current.worldToLocal(localMouse);

    for (let i = 0; i < dotCount; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];

      let tx = bx;
      let ty = by;
      let tz = bz;

      if (mouseActive.current) {
        const dx = bx - localMouse.x;
        const dy = by - localMouse.y;
        const dz = bz - localMouse.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const distortionRadius = 0.8;

        if (dist < distortionRadius) {
          const force = (1 - dist / distortionRadius) * 0.5;
          const normal = new THREE.Vector3(bx, by, bz).normalize();
          tx += normal.x * force;
          ty += normal.y * force;
          tz += normal.z * force;

          // Brighten nearby dots
          colAttr.setXYZ(i, 0.2 + force, 0.7 + force * 0.3, 1.0);
          sizAttr.setX(i, 3.0 + force * 6);
        } else {
          // Reset color
          colAttr.setXYZ(i, colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
          sizAttr.setX(i, sizes[i]);
        }
      } else {
        colAttr.setXYZ(i, colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
        sizAttr.setX(i, sizes[i]);
      }

      // Smooth interpolation
      const cx = posAttr.getX(i);
      const cy = posAttr.getY(i);
      const cz = posAttr.getZ(i);
      posAttr.setXYZ(
        i,
        cx + (tx - cx) * 0.1,
        cy + (ty - cy) * 0.1,
        cz + (tz - cz) * 0.1
      );
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    sizAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dotCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={dotCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={dotCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Background Particles ────────────────────────────── */
function Particles() {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

/* ── Scene ────────────────────────────────────────────── */
export default function Scene3D({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#3b82f6" />
        <DotGlobe scrollProgress={scrollProgress} />
        <Particles />
      </Canvas>
    </div>
  );
}
