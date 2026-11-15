import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, Globe, Clock, Search, Sparkles, MapPin, Target } from 'lucide-react';

interface Campus3DPin {
  id: string;
  code: string;
  region: string;
  name: string;
  location: string;
  dist: string;
  x: number;
  y: number;
  z: number;
  isPusat?: boolean;
}

const gontorCampuses: Campus3DPin[] = [
  // Pusat & Jawa (9 Kampus)
  { id: 'pusat', code: 'PUSAT', region: 'Jawa', name: 'PMDG Kampus Pusat', location: 'Ds. Gontor, Kec. Mlarak, Kab. Ponorogo, Jawa Timur', dist: '0 km (Pusat)', x: -3.5, y: 0, z: 5.8, isPusat: true },
  { id: 'g2', code: 'G-2', region: 'Jawa', name: 'PMDG Kampus 2', location: 'Ds. Madusari, Kec. Siman, Kab. Ponorogo, Jawa Timur', dist: '12 km', x: -3.3, y: 0, z: 5.8 },
  { id: 'g3', code: 'G-3', region: 'Jawa', name: 'PMDG Kampus 3 Darul Ma’rifat', location: 'Ds. Sumbercangkring, Kec. Gurah, Kab. Kediri, Jawa Timur', dist: '85 km', x: -2.5, y: 0, z: 5.7 },
  { id: 'g4', code: 'G-4', region: 'Jawa', name: 'PMDG Kampus 4 Darul Muttaqien', location: 'Ds. Kaligung, Kec. Blimbingsari, Kab. Banyuwangi, Jawa Timur', dist: '340 km', x: 0.2, y: 0, z: 6.0 },
  { id: 'g5', code: 'G-5', region: 'Jawa', name: 'PMDG Kampus 5 Darul Qiyam', location: 'Dsn. Gadingsari, Ds. Mangunsari, Kec. Sawangan, Kab. Magelang, Jawa Tengah', dist: '135 km', x: -5.2, y: 0, z: 5.5 },
  { id: 'gp1', code: 'GP-1', region: 'Jawa', name: 'PMDG Putri Kampus 1', location: 'Ds. Sambirejo, Kec. Mantingan, Kab. Ngawi, Jawa Timur', dist: '75 km', x: -4.1, y: 0, z: 5.7 },
  { id: 'gp2', code: 'GP-2', region: 'Jawa', name: 'PMDG Putri Kampus 2', location: 'Ds. Sambirejo, Kec. Mantingan, Kab. Ngawi, Jawa Timur', dist: '76 km', x: -4.0, y: 0, z: 5.7 },
  { id: 'gp3', code: 'GP-3', region: 'Jawa', name: 'PMDG Putri Kampus 3', location: 'Ds. Karangbanyu, Kec. Widodaren, Kab. Ngawi, Jawa Timur', dist: '72 km', x: -3.9, y: 0, z: 5.7 },
  { id: 'gp4', code: 'GP-4', region: 'Jawa', name: 'PMDG Putri Kampus 4', location: 'Dsn. Bobosan, Ds. Kemiri, Kec. Kandangan, Kab. Kediri, Jawa Timur', dist: '92 km', x: -2.3, y: 0, z: 5.7 },

  // Sumatera (7 Kampus)
  { id: 'g8', code: 'G-8', region: 'Sumatera', name: 'PMDG Kampus 8 Darul Amin', location: 'Ds. Meunasah Baro, Kec. Seulimeum, Kab. Aceh Besar, Aceh', dist: '2.150 km', x: -20.5, y: 0, z: -7.2 },
  { id: 'gp7', code: 'GP-7', region: 'Sumatera', name: 'PMDG Putri Kampus 7', location: 'Ds. Rimba Panjang, Kec. Tambang, Kab. Kampar, Riau', dist: '1.280 km', x: -14.8, y: 0, z: -2.6 },
  { id: 'g12', code: 'G-12', region: 'Sumatera', name: 'PMDG Kampus 12', location: 'Ds. Lubuk Jering, Kec. Sungai Mandau, Kab. Siak, Riau', dist: '1.320 km', x: -14.2, y: 0, z: -2.2 },
  { id: 'g9', code: 'G-9', region: 'Sumatera', name: 'PMDG Kampus 9', location: 'Ds. Sulit Air, Kec. X Koto Diatas, Kab. Solok, Sumatera Barat', dist: '1.190 km', x: -16.0, y: 0, z: -0.2 },
  { id: 'g10', code: 'G-10', region: 'Sumatera', name: 'PMDG Kampus 10', location: 'Ds. Parit Culum I, Kec. Muara Sabak Barat, Kab. Tanjung Jabung Timur, Jambi', dist: '980 km', x: -13.0, y: 0, z: -0.8 },
  { id: 'gp8', code: 'GP-8', region: 'Sumatera', name: 'PMDG Putri Kampus 8', location: 'Ds. Labuhan Ratu VI, Kec. Labuhan Ratu, Kab. Lampung Selatan, Lampung', dist: '680 km', x: -9.8, y: 0, z: 3.0 },
  { id: 'g7', code: 'G-7', region: 'Sumatera', name: 'PMDG Kampus 7', location: 'Dsn. Kubu Panglima, Ds. Tajimalela, Kec. Kalianda, Kab. Lampung Selatan, Prof. Lampung', dist: '670 km', x: -9.2, y: 0, z: 3.2 },

  // Sulawesi (4 Kampus)
  { id: 'gp6', code: 'GP-6', region: 'Sulawesi', name: 'PMDG Putri Kampus 6', location: 'Ds. Tokorondo, Kec. Poso Pesisir, Kab. Poso, Sulawesi Tengah', dist: '1.420 km', x: 7.8, y: 0, z: -0.8 },
  { id: 'g11', code: 'G-11', region: 'Sulawesi', name: 'PMDG Kampus 11', location: 'Ds. Tokorondo, Kec. Poso Pesisir, Kab. Poso, Sulawesi Tengah', dist: '1.422 km', x: 8.0, y: 0, z: -0.6 },
  { id: 'g6', code: 'G-6', region: 'Sulawesi', name: 'PMDG Kampus 6', location: 'Ds. Pudahoa, Kec. Konda, Kab. Konawe Selatan, Sulawesi Tenggara', dist: '1.310 km', x: 9.5, y: 0, z: 2.2 },
  { id: 'gp5', code: 'GP-5', region: 'Sulawesi', name: 'PMDG Putri Kampus 5', location: 'Ds. Lamomea, Kec. Konda, Kab. Konawe Selatan, Sulawesi Tenggara', dist: '1.315 km', x: 9.8, y: 0, z: 2.0 }
];

export const IndonesiaMap3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(() => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const autoRotateRef = useRef<boolean>(true);
  autoRotateRef.current = autoRotate;
  const [activeCampus, setActiveCampus] = useState<Campus3DPin | null>(gontorCampuses[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua');
  const controlsRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const pinMeshesRef = useRef<any[]>([]);

  const filteredCampuses = gontorCampuses.filter((c) => {
    const matchesRegion = selectedRegion === 'Semua' || c.region === selectedRegion;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const focusOnCampus = (campus: Campus3DPin) => {
    setActiveCampus(campus);
    if (controlsRef.current && cameraRef.current) {
      const controls = controlsRef.current;
      controls.target.set(campus.x, 0, campus.z);
      cameraRef.current.position.set(campus.x, 18, campus.z + 24);
      controls.update();
    }
  };

  useEffect(() => {
    let animationFrameId: number;
    let renderer: any;
    let scene: any;
    let camera: any;
    let controls: any;
    let raycaster: any;
    let mouse: any;
    let disposed = false;
    let cleanupThree: (() => void) | undefined;
    let observer: IntersectionObserver | undefined;

    const loadExternalScript = (src: string) => new Promise<void>((resolve, reject) => {
      const existing = Array.from(document.scripts).find((script) => script.src === src);
      if (existing) {
        if ((existing as HTMLScriptElement).dataset.loaded === 'true') {
          resolve();
          return;
        }
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => {
        script.dataset.loaded = 'true';
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });

    const loadThreeScript = async () => {
      if (!(window as any).THREE) {
        await loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
      }
      if (!(window as any).THREE?.GLTFLoader) {
        await loadExternalScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js');
      }
      if (!(window as any).THREE?.OrbitControls) {
        await loadExternalScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js');
      }

      if (!disposed) cleanupThree = initThree();
    };

    const createBadgeTexture = (THREE: any, text: string, isPusat = false) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d')!;

      ctx.shadowColor = 'rgba(214, 145, 3, 0.85)';
      ctx.shadowBlur = 18;

      ctx.beginPath();
      ctx.arc(128, 128, 105, 0, Math.PI * 2);
      ctx.fillStyle = '#062B4A';
      ctx.fill();

      ctx.lineWidth = 10;
      ctx.strokeStyle = isPusat ? '#F5D98A' : '#D69103';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(128, 128, 92, 0, Math.PI * 2);
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.strokeStyle = '#F5D98A';
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.shadowBlur = 0;

      if (isPusat) {
        ctx.font = 'bold 36px Georgia, serif';
        ctx.fillStyle = '#F5D98A';
        ctx.textAlign = 'center';
        ctx.fillText('👑 PUSAT', 128, 98);

        ctx.font = 'bold 38px Georgia, serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('PMDG', 128, 152);
      } else {
        ctx.font = 'bold 46px Georgia, serif';
        ctx.fillStyle = '#F5D98A';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 128, 128);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const initThree = () => {
      if (!mountRef.current || disposed) return;
      const THREE = (window as any).THREE;
      const container = mountRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      scene = new THREE.Scene();
      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 36, 62);
      cameraRef.current = camera;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.25 : 1.75));
      renderer.shadowMap.enabled = window.innerWidth >= 768;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI / 2.15;
      controls.minDistance = 12;
      controls.maxDistance = 140;
      controls.autoRotate = autoRotateRef.current;
      controls.autoRotateSpeed = 0.35;
      controlsRef.current = controls;

      const ambientLight = new THREE.AmbientLight(0xF4F1EB, 0.95);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xF5D98A, 2.5);
      mainLight.position.set(30, 50, 40);
      mainLight.castShadow = true;
      scene.add(mainLight);

      const fillLight = new THREE.DirectionalLight(0x062B4A, 1.3);
      fillLight.position.set(-30, 20, -30);
      scene.add(fillLight);

      const pointLight = new THREE.PointLight(0xD69103, 2.0, 100);
      pointLight.position.set(0, 25, 10);
      scene.add(pointLight);

      const goldColors = [0xD69103, 0xE8A820, 0xB8860B, 0xF5D98A, 0xC58000];

      const renderPinsAndConnections = (modelWrapper?: any) => {
        const findLandSurfaceY = (targetX: number, targetZ: number) => {
          if (!modelWrapper) return { y: 0, posX: targetX, posZ: targetZ };

          const downRay = new THREE.Raycaster();
          const rayDir = new THREE.Vector3(0, -1, 0);

          downRay.set(new THREE.Vector3(targetX, 100, targetZ), rayDir);
          let hits = downRay.intersectObject(modelWrapper, true);
          if (hits.length > 0) {
            return { y: hits[0].point.y, posX: targetX, posZ: targetZ };
          }

          const radii = [0.2, 0.5, 0.8, 1.2, 1.8, 2.5];
          const angles = [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4, Math.PI, 5 * Math.PI / 4, 3 * Math.PI / 2, 7 * Math.PI / 4];
          for (const r of radii) {
            for (const a of angles) {
              const testX = targetX + r * Math.cos(a);
              const testZ = targetZ + r * Math.sin(a);
              downRay.set(new THREE.Vector3(testX, 100, testZ), rayDir);
              hits = downRay.intersectObject(modelWrapper, true);
              if (hits.length > 0) {
                return { y: hits[0].point.y, posX: testX, posZ: testZ };
              }
            }
          }

          const mapBox = new THREE.Box3().setFromObject(modelWrapper);
          return { y: mapBox.max.y, posX: targetX, posZ: targetZ };
        };

        const pusatCampus = gontorCampuses[0];
        const pusatLand = findLandSurfaceY(pusatCampus.x, pusatCampus.z);
        const pusatPos = new THREE.Vector3(pusatLand.posX, pusatLand.y + 0.3, pusatLand.posZ);

        const createdPinMeshes: any[] = [];

        gontorCampuses.forEach((campus) => {
          const land = findLandSurfaceY(campus.x, campus.z);
          const branchPos = new THREE.Vector3(land.posX, land.y + 0.3, land.posZ);

          if (!campus.isPusat) {
            const midX = (pusatPos.x + branchPos.x) / 2;
            const midZ = (pusatPos.z + branchPos.z) / 2;
            const dist = pusatPos.distanceTo(branchPos);
            const midY = Math.max(pusatPos.y, branchPos.y) + Math.min(dist * 0.3, 10);

            const curve = new THREE.QuadraticBezierCurve3(
              pusatPos,
              new THREE.Vector3(midX, midY, midZ),
              branchPos
            );

            const points = curve.getPoints(40);
            const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
            const curveMat = new THREE.LineBasicMaterial({
              color: 0xF5D98A,
              transparent: true,
              opacity: 0.65,
              linewidth: 2
            });
            const curveLine = new THREE.Line(curveGeo, curveMat);
            scene.add(curveLine);
          }

          const pinGroup = new THREE.Group();
          pinGroup.position.set(land.posX, land.y, land.posZ);

          const ringGeo = new THREE.RingGeometry(0.3, 0.7, 32);
          const ringMat = new THREE.MeshBasicMaterial({
            color: campus.isPusat ? 0xFFDF73 : 0xD69103,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.95
          });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = Math.PI / 2;
          ringMesh.position.y = 0.05;
          pinGroup.add(ringMesh);

          const stemGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8);
          const stemMat = new THREE.MeshBasicMaterial({ color: campus.isPusat ? 0xFFDF73 : 0xD69103 });
          const stemMesh = new THREE.Mesh(stemGeo, stemMat);
          stemMesh.position.y = 0.9;
          pinGroup.add(stemMesh);

          const badgeTexture = createBadgeTexture(THREE, campus.code, campus.isPusat);
          const spriteMat = new THREE.SpriteMaterial({ map: badgeTexture, transparent: true });
          const sprite = new THREE.Sprite(spriteMat);
          sprite.scale.set(campus.isPusat ? 3.2 : 2.5, campus.isPusat ? 3.2 : 2.5, 1);
          sprite.position.y = 2.4;
          (sprite as any).userData = campus;
          pinGroup.add(sprite);
          createdPinMeshes.push(sprite);

          if (campus.isPusat) {
            const bigRingGeo = new THREE.RingGeometry(0.8, 1.6, 32);
            const bigRingMat = new THREE.MeshBasicMaterial({ color: 0xF5D98A, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
            const bigRingMesh = new THREE.Mesh(bigRingGeo, bigRingMat);
            bigRingMesh.rotation.x = Math.PI / 2;
            bigRingMesh.position.y = 0.06;
            pinGroup.add(bigRingMesh);

            const glowLight = new THREE.PointLight(0xF5D98A, 2.8, 14);
            glowLight.position.y = 2.4;
            pinGroup.add(glowLight);
          }

          scene.add(pinGroup);
        });
        pinMeshesRef.current = createdPinMeshes;
      };

      const createFallbackGround = () => {
        const gridHelper = new THREE.GridHelper(60, 30, 0xD69103, 0x0D3D66);
        gridHelper.position.y = -0.1;
        scene.add(gridHelper);

        const groundGeo = new THREE.CylinderGeometry(32, 35, 1, 64);
        const groundMat = new THREE.MeshStandardMaterial({
          color: 0x062B4A,
          metalness: 0.8,
          roughness: 0.2,
          emissive: 0x021324
        });
        const groundMesh = new THREE.Mesh(groundGeo, groundMat);
        groundMesh.position.y = -0.6;
        groundMesh.receiveShadow = true;
        scene.add(groundMesh);
      };

      const glbPath = `${import.meta.env.BASE_URL}peta_provinsi_indonesia.glb`;
      const loader = new THREE.GLTFLoader();
      loader.load(
        glbPath,
        (gltf: any) => {
          if (disposed) return;
          const model = gltf.scene;
          const initialBox = new THREE.Box3().setFromObject(model);
          const initialSize = initialBox.getSize(new THREE.Vector3());

          if (initialSize.y > initialSize.z * 1.5) {
            model.rotation.x = -Math.PI / 2;
          }

          const modelWrapper = new THREE.Group();
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          model.position.set(-center.x, -center.y, -center.z);
          modelWrapper.add(model);

          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 50 / maxDim;
          modelWrapper.scale.set(scale, scale, scale);

          let meshIdx = 0;
          model.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              const colorHex = goldColors[meshIdx % goldColors.length];
              meshIdx++;

              child.material = new THREE.MeshStandardMaterial({
                color: colorHex,
                metalness: 0.75,
                roughness: 0.3,
                emissive: 0x1a1100,
                shadowSide: THREE.DoubleSide
              });
            }
          });

          scene.add(modelWrapper);
          modelWrapper.updateMatrixWorld(true);

          renderPinsAndConnections(modelWrapper);
          setLoading(false);
        },
        (xhr: any) => {
          if (xhr.lengthComputable) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            setLoadingProgress(percent);
          }
        },
        (error: any) => {
          if (disposed) return;
          console.warn('GLB load failed, trying relative path fallback...', error);
          loader.load(
            './peta_provinsi_indonesia.glb',
            (gltf: any) => {
              if (disposed) return;
              const model = gltf.scene;
              const initialBox = new THREE.Box3().setFromObject(model);
              const initialSize = initialBox.getSize(new THREE.Vector3());
              if (initialSize.y > initialSize.z * 1.5) model.rotation.x = -Math.PI / 2;

              const modelWrapper = new THREE.Group();
              const box = new THREE.Box3().setFromObject(model);
              const center = box.getCenter(new THREE.Vector3());
              const size = box.getSize(new THREE.Vector3());
              model.position.set(-center.x, -center.y, -center.z);
              modelWrapper.add(model);
              const maxDim = Math.max(size.x, size.y, size.z);
              const scale = 50 / maxDim;
              modelWrapper.scale.set(scale, scale, scale);

              let meshIdx = 0;
              model.traverse((child: any) => {
                if (child.isMesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                  child.material = new THREE.MeshStandardMaterial({
                    color: goldColors[meshIdx % goldColors.length],
                    metalness: 0.75,
                    roughness: 0.3,
                    emissive: 0x1a1100,
                    shadowSide: THREE.DoubleSide
                  });
                  meshIdx++;
                }
              });

              scene.add(modelWrapper);
              modelWrapper.updateMatrixWorld(true);
              renderPinsAndConnections(modelWrapper);
              setLoading(false);
            },
            undefined,
            () => {
              if (disposed) return;
              // Both GLB load attempts failed (e.g. file:// CORS block or offline)
              createFallbackGround();
              renderPinsAndConnections();
              setLoading(false);
            }
          );
        }
      );

      const handlePointerMove = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(pinMeshesRef.current);
        if (intersects.length > 0) {
          const campusData = intersects[0].object.userData;
          if (campusData) {
            setActiveCampus(campusData);
          }
        }
      };
      renderer.domElement.addEventListener('mousemove', handlePointerMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (!document.hidden && controls) controls.update();
        if (!document.hidden && renderer && scene && camera) renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, w < 768 ? 1.25 : 1.75));
        renderer.shadowMap.enabled = w >= 768;
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (renderer?.domElement) {
          renderer.domElement.removeEventListener('mousemove', handlePointerMove);
          renderer.domElement.remove();
        }
        cancelAnimationFrame(animationFrameId);
        controls?.dispose?.();
        renderer?.dispose?.();
        controlsRef.current = null;
        cameraRef.current = null;
        pinMeshesRef.current = [];
      };
    };

    const startWhenVisible = () => {
      if (disposed) return;
      loadThreeScript().catch((error) => {
        console.error('Unable to initialize the 3D campus map:', error);
        if (!disposed) {
          setLoadError(true);
          setLoading(false);
        }
      });
    };

    if (mountRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer?.disconnect();
          startWhenVisible();
        }
      }, { rootMargin: '300px 0px' });
      observer.observe(mountRef.current);
    } else {
      startWhenVisible();
    }

    return () => {
      disposed = true;
      observer?.disconnect();
      cleanupThree?.();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const toggleAutoRotate = () => {
    const nextState = !autoRotate;
    setAutoRotate(nextState);
    if (controlsRef.current) {
      controlsRef.current.autoRotate = nextState;
    }
  };

  const resetCameraView = () => {
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.target.set(0, 0, 0);
      cameraRef.current.position.set(0, 36, 62);
      controlsRef.current.reset();
    }
  };

  return (
    <section id="map-3d" className="relative py-28 px-4 sm:px-6 md:px-12 border-t border-[#B58A3C]/30 bg-gradient-to-b from-[#101D2A] via-[#192E41] to-[#0B151F] text-[#EDE8E2] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#325956]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B58A3C]/40 bg-[#101D2A]/80 text-[#D4A853] text-xs font-mono tracking-widest uppercase mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B58A3C] animate-pulse" />
            <span>3D NUSANTARA MAP · SEBARAN KAMPUS PMDG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-mileast italic gold-text">
            Peta 3D Kampus Gontor
          </h2>
          <p className="font-alverata text-[#EDE8E2]/80 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Visualisasi 3D Interaktif Kepulauan Indonesia & Pancaran 20 Cabang PMDG dari Kampus Pusat Ponorogo.
          </p>

          {/* 4 Geographical Scope Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto mt-6">
            <div className="p-2.5 rounded-xl bg-[#101D2A]/80 border border-[#B58A3C]/30 text-center">
              <div className="font-mileast font-bold text-base gold-text">9 Kampus</div>
              <div className="text-[10px] font-mono text-[#EDE8E2]/70 uppercase">Wilayah Jawa & Pusat</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#101D2A]/80 border border-[#B58A3C]/30 text-center">
              <div className="font-mileast font-bold text-base gold-text">7 Kampus</div>
              <div className="text-[10px] font-mono text-[#EDE8E2]/70 uppercase">Wilayah Sumatera</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#101D2A]/80 border border-[#B58A3C]/30 text-center">
              <div className="font-mileast font-bold text-base gold-text">4 Kampus</div>
              <div className="text-[10px] font-mono text-[#EDE8E2]/70 uppercase">Wilayah Sulawesi</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#101D2A]/80 border border-[#B58A3C]/30 text-center">
              <div className="font-mileast font-bold text-base gold-text">2.150 KM</div>
              <div className="text-[10px] font-mono text-[#EDE8E2]/70 uppercase">Jarak Terjauh (Aceh)</div>
            </div>
          </div>

          {/* Interactive Search Box & Region Filters */}
          <div className="mt-7 max-w-lg mx-auto flex flex-col items-center gap-3">
            <div className="w-full relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#B58A3C]" />
              <input
                type="text"
                placeholder="Cari Kampus atau Wilayah (cth: Ponorogo, Aceh, Kediri, Sultra)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#101D2A]/90 border border-[#B58A3C]/50 text-xs sm:text-sm text-[#EDE8E2] placeholder-gray-400 focus:outline-none focus:border-[#D4A853] transition-all shadow-inner backdrop-blur-md"
              />
            </div>

            {/* Region Pill Filters */}
            <div className="flex flex-wrap justify-center items-center gap-1.5 p-1.5 rounded-2xl bg-[#101D2A]/80 border border-[#B58A3C]/30 text-xs">
              {['Semua', 'Jawa', 'Sumatera', 'Sulawesi'].map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  className={`min-h-11 px-3.5 py-2 rounded-full transition-all cursor-pointer font-cormorant-sc tracking-wider uppercase font-bold text-xs ${
                    selectedRegion === r
                      ? 'bg-[#B58A3C] text-[#192E41] shadow-md'
                      : 'text-[#EDE8E2]/70 hover:text-[#EDE8E2]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Model Card */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#101D2A]/95 border-2 border-[#B58A3C]/40 relative overflow-hidden group shadow-[0_25px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-[#B58A3C]/25 bg-[#0B151F]/60 rounded-2xl mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B58A3C] animate-pulse" />
              <span className="text-xs font-mono tracking-wider font-bold text-[#EDE8E2]">INTERACTIVE 3D NUSANTARA GLB</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
              <button
                onClick={toggleAutoRotate}
                className="min-h-11 bg-[#B58A3C] hover:bg-[#D4A853] text-[#192E41] font-bold px-4 py-2 rounded-full text-xs transition-all shadow-md cursor-pointer font-cormorant-sc uppercase tracking-wider"
              >
                {autoRotate ? '⏸ Jeda Putar' : '▶ Putar Otomatis'}
              </button>
              <button
                onClick={resetCameraView}
                className="min-h-11 border border-[#B58A3C]/50 hover:bg-[#B58A3C]/20 text-[#EDE8E2] font-semibold px-4 py-2 rounded-full text-xs transition-all cursor-pointer font-cormorant-sc uppercase tracking-wider"
              >
                ↺ Reset Sudut
              </button>
            </div>
          </div>

          <div className="relative w-full h-[450px] sm:h-[550px] cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden bg-[#070D14]">
            {(loading || loadError) && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0B151F]/95 backdrop-blur-md">
                {!loadError && <div className="w-12 h-12 rounded-full border-4 border-[#B58A3C] border-t-transparent animate-spin mb-4" />}
                <div className="text-[#D4A853] font-bold text-base font-mileast tracking-wide">
                  {loadError ? 'Peta 3D tidak dapat dimuat' : 'Menyiapkan Peta 3D Nusantara...'}
                </div>
                <div className="text-xs text-[#EDE8E2]/70 mt-1 font-mono">
                  {loadError ? 'Periksa koneksi internet lalu muat ulang halaman.' : `${loadingProgress}% terunduh`}
                </div>
              </div>
            )}
            <div ref={mountRef} className="w-full h-full" />

            {activeCampus && (
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto z-30 max-w-sm p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border-2 border-[#B58A3C] text-[#192E41] shadow-2xl transition-all">
                <div className="flex items-center justify-between text-xs text-[#325956] font-bold mb-1">
                  <span>{activeCampus.isPusat ? '👑 KAMPUS PUSAT GONTOR' : `CABANG ${activeCampus.code}`}</span>
                  <span className="px-2 py-0.5 rounded bg-[#192E41] text-[#EDE8E2] font-bold text-[10px]">{activeCampus.code}</span>
                </div>
                <h4 className="text-lg font-bold text-[#192E41] leading-tight font-mileast">{activeCampus.name}</h4>
                <p className="text-xs text-[#192E41]/80 mt-1 font-alverata">📍 {activeCampus.location}</p>
                <button
                  onClick={() => focusOnCampus(activeCampus)}
                  className="mt-3 text-[11px] font-bold text-[#192E41] hover:text-[#B58A3C] flex items-center gap-1.5 cursor-pointer underline"
                >
                  <Target className="w-3.5 h-3.5 text-[#B58A3C]" />
                  <span>Fokuskan Kamera 3D Ke Sini</span>
                </button>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-[#B58A3C]/30 bg-[#0B151F]/80 rounded-2xl mt-3 overflow-x-auto flex items-center gap-2">
            <span className="text-xs text-[#B58A3C] font-semibold flex-shrink-0 mr-2 uppercase tracking-wider font-bold">KAMPUS ({filteredCampuses.length}):</span>
            {filteredCampuses.map((c) => (
              <button
                key={c.id}
                onClick={() => focusOnCampus(c)}
                className={`px-3 py-1 rounded-full text-xs flex-shrink-0 transition-all cursor-pointer font-mono ${
                  activeCampus?.id === c.id
                    ? 'bg-[#B58A3C] text-[#192E41] font-bold shadow-[0_0_15px_rgba(181,138,60,0.4)]'
                    : 'bg-[#EDE8E2]/10 hover:bg-[#EDE8E2]/20 text-[#EDE8E2] border border-[#B58A3C]/30'
                }`}
              >
                {c.isPusat ? '👑 Pusat' : `${c.code}`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
