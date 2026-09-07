import React, { useEffect, useRef, useState } from 'react';
import { Search, Sparkles, Target } from 'lucide-react';
const gontorCampuses = [
    { id: 'pusat', code: 'PUSAT', name: 'PMDG Kampus Pusat', location: 'Gontor, Ponorogo, Jawa Timur', x: -3.5, y: 0, z: 5.8, isPusat: true },
    { id: 'g2', code: 'G-2', name: 'Gontor 2', location: 'Madusari, Siman, Ponorogo, Jawa Timur', x: -3.3, y: 0, z: 5.8 },
    { id: 'g3', code: 'G-3', name: 'Gontor 3 Darul Ma\'rifat', location: 'Sumbercangkring, Gurah, Kediri, Jawa Timur', x: -2.5, y: 0, z: 5.7 },
    { id: 'g4', code: 'G-4', name: 'Gontor 4 Darul Muttaqien', location: 'Kalisat, Banyuwangi, Jawa Timur', x: 0.2, y: 0, z: 6.0 },
    { id: 'g5', code: 'G-5', name: 'Gontor 5 Darul Qiyam', location: 'Sawangan, Magelang, Jawa Tengah', x: -5.2, y: 0, z: 5.5 },
    { id: 'g6', code: 'G-6', name: 'Gontor 6 Darul Qiyam', location: 'Tanjung Sari, Lampung Selatan, Lampung', x: -9.5, y: 0, z: 2.8 },
    { id: 'g7', code: 'G-7', name: 'Gontor 7 Riau', location: 'Rumbio, Kampar, Riau', x: -14.5, y: 0, z: -2.5 },
    { id: 'g8', code: 'G-8', name: 'Gontor 8 Aceh', location: 'Labuhan Haji, Aceh Besar, Aceh', x: -20.5, y: 0, z: -7.2 },
    { id: 'g9', code: 'G-9', name: 'Gontor 9 SULSEL', location: 'Pangkep, Sulawesi Selatan', x: 6.2, y: 0, z: 2.2 },
    { id: 'g10', code: 'G-10', name: 'Gontor 10 Jambi', location: 'Tanjung Jabung Barat, Jambi', x: -13.0, y: 0, z: -0.8 },
    { id: 'gp1', code: 'GP-1', name: 'Gontor Putri 1', location: 'Mantingan, Ngawi, Jawa Timur', x: -4.1, y: 0, z: 5.7 },
    { id: 'gp2', code: 'GP-2', name: 'Gontor Putri 2', location: 'Mantingan, Ngawi, Jawa Timur', x: -4.0, y: 0, z: 5.7 },
    { id: 'gp3', code: 'GP-3', name: 'Gontor Putri 3', location: 'Widodaren, Ngawi, Jawa Timur', x: -3.9, y: 0, z: 5.7 },
    { id: 'gp4', code: 'GP-4', name: 'Gontor Putri 4', location: 'Konawe Selatan, Sulawesi Tenggara', x: 9.8, y: 0, z: 2.0 },
    { id: 'gp5', code: 'GP-5', name: 'Gontor Putri 5', location: 'Kandangan, Kediri, Jawa Timur', x: -2.3, y: 0, z: 5.7 },
    { id: 'gp6', code: 'GP-6', name: 'Gontor Putri 6', location: 'Poso, Sulawesi Tengah', x: 7.8, y: 0, z: -0.8 },
    { id: 'gp7', code: 'GP-7', name: 'Gontor Putri 7', location: 'Kampar, Riau', x: -14.8, y: 0, z: -2.6 }
];
export const IndonesiaMap3D = () => {
    const mountRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [activeCampus, setActiveCampus] = useState(gontorCampuses[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const controlsRef = useRef(null);
    const cameraRef = useRef(null);
    const pinMeshesRef = useRef([]);
    const filteredCampuses = gontorCampuses.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location.toLowerCase().includes(searchQuery.toLowerCase()));
    const focusOnCampus = (campus) => {
        setActiveCampus(campus);
        if (controlsRef.current && cameraRef.current) {
            const controls = controlsRef.current;
            controls.target.set(campus.x, 0, campus.z);
            cameraRef.current.position.set(campus.x, 18, campus.z + 24);
            controls.update();
        }
    };
    useEffect(() => {
        let animationFrameId;
        let renderer;
        let scene;
        let camera;
        let controls;
        let raycaster;
        let mouse;
        const loadThreeScript = async () => {
            if (!window.THREE) {
                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                    script.onload = resolve;
                    document.head.appendChild(script);
                });
            }
            if (!window.THREE?.GLTFLoader) {
                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js';
                    script.onload = resolve;
                    document.head.appendChild(script);
                });
            }
            if (!window.THREE?.OrbitControls) {
                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js';
                    script.onload = resolve;
                    document.head.appendChild(script);
                });
            }
            initThree();
        };
        const createBadgeTexture = (THREE, text, isPusat = false) => {
            const canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;
            const ctx = canvas.getContext('2d');
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
            }
            else {
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
            if (!mountRef.current)
                return;
            const THREE = window.THREE;
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
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
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
            controls.autoRotate = autoRotate;
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
            const renderPinsAndConnections = (modelWrapper) => {
                const findLandSurfaceY = (targetX, targetZ) => {
                    if (!modelWrapper)
                        return { y: 0, posX: targetX, posZ: targetZ };
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
                const createdPinMeshes = [];
                gontorCampuses.forEach((campus) => {
                    const land = findLandSurfaceY(campus.x, campus.z);
                    const branchPos = new THREE.Vector3(land.posX, land.y + 0.3, land.posZ);
                    if (!campus.isPusat) {
                        const midX = (pusatPos.x + branchPos.x) / 2;
                        const midZ = (pusatPos.z + branchPos.z) / 2;
                        const dist = pusatPos.distanceTo(branchPos);
                        const midY = Math.max(pusatPos.y, branchPos.y) + Math.min(dist * 0.3, 10);
                        const curve = new THREE.QuadraticBezierCurve3(pusatPos, new THREE.Vector3(midX, midY, midZ), branchPos);
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
                    sprite.userData = campus;
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
            const glbPath = './peta_provinsi_indonesia.glb';
            const loader = new THREE.GLTFLoader();
            loader.load(glbPath, (gltf) => {
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
                model.traverse((child) => {
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
            }, (xhr) => {
                if (xhr.lengthComputable) {
                    const percent = Math.round((xhr.loaded / xhr.total) * 100);
                    setLoadingProgress(percent);
                }
            }, (error) => {
                console.warn('GLB load failed, trying absolute path / fallback...', error);
                loader.load('/peta_provinsi_indonesia.glb', (gltf) => {
                    const model = gltf.scene;
                    const initialBox = new THREE.Box3().setFromObject(model);
                    const initialSize = initialBox.getSize(new THREE.Vector3());
                    if (initialSize.y > initialSize.z * 1.5)
                        model.rotation.x = -Math.PI / 2;
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
                    model.traverse((child) => {
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
                }, undefined, () => {
                    // Both GLB load attempts failed (e.g. file:// CORS block or offline)
                    createFallbackGround();
                    renderPinsAndConnections();
                    setLoading(false);
                });
            });
            const handlePointerMove = (event) => {
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
                if (controls)
                    controls.update();
                if (renderer && scene && camera)
                    renderer.render(scene, camera);
            };
            animate();
            const handleResize = () => {
                if (!container || !renderer || !camera)
                    return;
                const w = container.clientWidth;
                const h = container.clientHeight;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
                if (renderer?.domElement) {
                    renderer.domElement.removeEventListener('mousemove', handlePointerMove);
                    renderer.domElement.remove();
                }
                cancelAnimationFrame(animationFrameId);
            };
        };
        loadThreeScript();
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
    return (React.createElement("section", { id: "map", className: "relative py-20 px-6 border-t border-[#D69103]/20 bg-[#062B4A]" },
        React.createElement("div", { className: "max-w-6xl mx-auto" },
            React.createElement("div", { className: "text-center mb-10" },
                React.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D69103]/40 bg-[#D69103]/10 text-[#F5D98A] text-xs md:text-sm mb-3" },
                    React.createElement(Sparkles, { className: "w-4 h-4 text-[#D69103] animate-pulse" }),
                    "3D NUSANTARA MAP \u00B7 PROPOSAL DRAMA ARENA HAL 8-9"),
                React.createElement("h2", { className: "text-3xl md:text-5xl font-bold tracking-tight font-mileast italic text-[#F5D98A]" }, "Peta 3D Kampus Gontor"),
                React.createElement("p", { className: "font-baskerville text-gray-300 text-sm mt-3 max-w-xl mx-auto" }, "Visualisasi 3D Interaktif Kepulauan Indonesia & Pancaran Cabang PMDG dari Kampus Pusat Ponorogo."),
                React.createElement("div", { className: "mt-6 max-w-md mx-auto relative" },
                    React.createElement(Search, { className: "w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#D69103]" }),
                    React.createElement("input", { type: "text", placeholder: "Cari Kampus atau Provinsi (cth: Aceh, Riau, Kediri, Sultra)...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full pl-11 pr-4 py-2.5 rounded-full bg-[#041B30] border border-[#D69103]/50 text-sm text-[#F4F1EB] placeholder-gray-400 focus:outline-none focus:border-[#F5D98A] transition-all shadow-inner" }))),
            React.createElement("div", { className: "p-4 rounded-3xl bg-[#041B30] border-2 border-[#D69103]/50 relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.5)]" },
                React.createElement("div", { className: "flex flex-wrap items-center justify-between px-4 py-3 border-b border-[#D69103]/30" },
                    React.createElement("div", { className: "flex items-center gap-2" },
                        React.createElement("div", { className: "w-3 h-3 rounded-full bg-[#D69103] animate-pulse" }),
                        React.createElement("span", { className: "text-sm font-semibold text-[#F4F1EB]" }, "Interactive 3D GLB Model")),
                    React.createElement("div", { className: "flex items-center gap-2 mt-2 sm:mt-0" },
                        React.createElement("button", { onClick: toggleAutoRotate, className: "bg-[#D69103] hover:bg-[#E8A820] text-[#062B4A] font-semibold px-4 py-1.5 rounded-full text-xs transition-all shadow-[0_0_15px_rgba(214,145,3,0.3)] cursor-pointer" }, autoRotate ? '⏸ Lambatkan & Putar' : '▶ Putar Lambat'),
                        React.createElement("button", { onClick: resetCameraView, className: "border border-[#D69103]/50 hover:bg-[#D69103]/20 text-[#F4F1EB] font-medium px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer" }, "\u21BA Reset View"))),
                React.createElement("div", { className: "relative w-full h-[450px] sm:h-[550px] cursor-grab active:cursor-grabbing" },
                    loading && (React.createElement("div", { className: "absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#062B4A]/90 backdrop-blur-sm" },
                        React.createElement("div", { className: "w-10 h-10 rounded-full border-4 border-[#D69103] border-t-transparent animate-spin mb-4" }),
                        React.createElement("div", { className: "text-[#F5D98A] font-semibold text-base" }, "Memuat Peta 3D Proposal..."),
                        React.createElement("div", { className: "text-xs text-gray-300 mt-1" },
                            loadingProgress,
                            "% terunduh"))),
                    React.createElement("div", { ref: mountRef, className: "w-full h-full" }),
                    activeCampus && (React.createElement("div", { className: "absolute bottom-6 left-6 z-30 max-w-sm p-5 rounded-2xl bg-[#F4F1EB] border-2 border-[#D69103] text-[#062B4A] shadow-2xl transition-all" },
                        React.createElement("div", { className: "flex items-center justify-between text-xs text-[#D69103] font-bold mb-1" },
                            React.createElement("span", null, activeCampus.isPusat ? '👑 KAMPUS PUSAT GONTOR' : `CABANG ${activeCampus.code}`),
                            React.createElement("span", { className: "px-2 py-0.5 rounded bg-[#062B4A] text-[#F5D98A] font-bold text-[10px]" }, activeCampus.code)),
                        React.createElement("h4", { className: "text-lg font-bold text-[#062B4A] leading-tight" }, activeCampus.name),
                        React.createElement("p", { className: "text-xs text-gray-700 mt-1" },
                            "\uD83D\uDCCD ",
                            activeCampus.location),
                        React.createElement("button", { onClick: () => focusOnCampus(activeCampus), className: "mt-3 text-[11px] font-bold text-[#062B4A] hover:text-[#D69103] flex items-center gap-1.5 cursor-pointer underline" },
                            React.createElement(Target, { className: "w-3.5 h-3.5" }),
                            React.createElement("span", null, "Fokuskan Kamera 3D Ke Sini"))))),
                React.createElement("div", { className: "p-3 border-t border-[#D69103]/30 bg-[#062B4A]/80 overflow-x-auto flex items-center gap-2" },
                    React.createElement("span", { className: "text-xs text-[#D69103] font-semibold flex-shrink-0 mr-2 uppercase tracking-wider" }, "KAMPUS:"),
                    filteredCampuses.map((c) => (React.createElement("button", { key: c.id, onClick: () => focusOnCampus(c), className: `px-3 py-1 rounded-full text-xs flex-shrink-0 transition-all cursor-pointer ${activeCampus?.id === c.id
                            ? 'bg-[#D69103] text-[#062B4A] font-bold shadow-[0_0_15px_rgba(214,145,3,0.4)]'
                            : 'bg-[#F4F1EB]/10 hover:bg-[#F4F1EB]/20 text-[#F4F1EB] border border-[#D69103]/30'}` }, c.isPusat ? '👑 Pusat' : `${c.code}`))))))));
};
