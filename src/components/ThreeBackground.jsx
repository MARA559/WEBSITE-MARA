import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Set renderer size and append to DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles for a flowing design background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const positionArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    // Fill with random positions and scales
    for (let i = 0; i < particlesCount; i++) {
      // Position
      positionArray[i * 3] = (Math.random() - 0.5) * 15; // x
      positionArray[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      positionArray[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z (mostly negative to place behind camera)
      
      // Scale (size variation for particles)
      scaleArray[i] = Math.random() * 2.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

    // Create a custom shader material for particles
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if(dist > 0.5) discard;
          
          // Gradient from purple to deep blue
          vec3 color1 = vec3(0.5, 0.2, 0.8); // Purple
          vec3 color2 = vec3(0.2, 0.3, 0.8); // Deep blue
          vec3 finalColor = mix(color1, color2, dist * 2.0);
          
          float alpha = 0.7 * (1.0 - dist * 2.0);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Create particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Create a few larger geometric shapes
    const geometryObjects = [];
    
    // Create an icosahedron (many-faced polyhedron)
    const icosaGeometry = new THREE.IcosahedronGeometry(1, 0);
    const icosaMaterial = new THREE.MeshBasicMaterial({
      color: 0x4a3c8c,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosahedron.position.set(-3, 2, -5);
    geometryObjects.push(icosahedron);
    scene.add(icosahedron);

    // Create an octahedron
    const octaGeometry = new THREE.OctahedronGeometry(0.8, 0);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0x2e4b9e,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(3, -1.5, -4);
    geometryObjects.push(octahedron);
    scene.add(octahedron);

    // Create a torus
    const torusGeometry = new THREE.TorusGeometry(1.2, 0.2, 16, 50);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x7851a9,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(0, 0, -7);
    torus.rotation.x = Math.PI / 4;
    geometryObjects.push(torus);
    scene.add(torus);

    // Position camera
    camera.position.z = 5;

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x6f42c1, 0.5);
    scene.add(ambientLight);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction for parallax effect
    const mouse = {
      x: 0,
      y: 0
    };

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate particle system slowly
      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = elapsedTime * 0.025;

      // Rotate geometric objects
      geometryObjects.forEach((obj, i) => {
        obj.rotation.x = elapsedTime * (0.1 + i * 0.02);
        obj.rotation.y = elapsedTime * (0.15 + i * 0.01);
        
        // Apply parallax effect based on mouse position
        obj.position.x += (mouse.x * 0.3 - obj.position.x) * 0.01;
        obj.position.y += (mouse.y * 0.3 - obj.position.y) * 0.01;
      });

      // Render scene
      renderer.render(scene, camera);
      
      // Continue animation loop
      return requestAnimationFrame(animate);
    };

    const animationId = animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      mountRef.current.removeChild(renderer.domElement);
      
      // Dispose geometries and materials
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      geometryObjects.forEach(obj => {
        obj.geometry.dispose();
        obj.material.dispose();
      });
      
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ThreeBackground;