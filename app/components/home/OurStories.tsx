'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as THREE from 'three';

type Story = {
  id: number;
  title: string;
  description?: string;
  date: string;
  dateColor: string;
  image: string;
  featured?: boolean;
};

const stories: Story[] = [
  {
    id: 1,
    title: 'A fun toddler coloring training on classroom',
    description:
      'Engaging children in creative activities to enhance their learning experience and foster a love for education.',
    date: 'Nov 19, 2024',
    dateColor: 'bg-rose-400',
    image: '/assets/story-1.png',
    featured: true,
  },
  {
    id: 2,
    title: "Find out if a school fits the family’s needs",
    date: 'Dec 22, 2024',
    dateColor: 'bg-orange-300',
    image: '/assets/story-2.png',
  },
  {
    id: 3,
    title: 'Summer math & literacy centres for kids',
    date: 'Jan 03, 2025',
    dateColor: 'bg-sky-400',
    image: '/assets/story-3.png',
  },
  {
    id: 4,
    title: 'Classroom management techniques for new tutors',
    date: 'Jan 06, 2025',
    dateColor: 'bg-green-400',
    image: '/assets/story-4.png',
  },
  {
    id: 5,
    title: 'Conversation rhymes improve kids listening',
    date: 'Jan 09, 2025',
    dateColor: 'bg-purple-400',
    image: '/assets/story-5.png',
  },
];

export default function OurStories() {
  const featured = stories.find((s) => s.featured);
  const rest = stories.filter((s) => !s.featured);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let animationId: number;

    const init = async () => {
      const { OrbitControls } = await import(
        'three/examples/jsm/controls/OrbitControls'
      );

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        45,
        canvasRef.current!.clientWidth / canvasRef.current!.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 50;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setSize(
        canvasRef.current!.clientWidth,
        canvasRef.current!.clientHeight
      );

      canvasRef.current!.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0xffffff, 0.7));

      const directional = new THREE.DirectionalLight(0xffffff, 0.5);
      directional.position.set(10, 10, 10);
      scene.add(directional);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;

      const geometry = new THREE.PlaneGeometry(12, 8);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.05,
      });

      stories.forEach((_, i) => {
        const card = new THREE.Mesh(geometry, material.clone());
        card.position.x = (i % 3) * 14 - 14;
        card.position.y = -Math.floor(i / 3) * 10;
        scene.add(card);
      });

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    const handleResize = () => {
      if (!canvasRef.current || !renderer || !camera) return;

      camera.aspect =
        canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      renderer?.dispose();
      scene?.clear();
    };
  }, []);

  return (
    <section className="relative py-20">
      {/* Three.js background */}
      <div
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-3xl font-semibold mb-12">
          Our Stories
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured && (
            <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform">
              <div className="relative h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
                <span
                  className={`absolute bottom-4 left-4 px-4 py-1.5 text-sm text-white rounded-full ${featured.dateColor}`}
                >
                  {featured.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {featured.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              >
                <div className="relative h-40">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={`absolute bottom-3 left-3 px-3 py-1 text-xs text-white rounded-full ${story.dateColor}`}
                  >
                    {story.date}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-sm leading-snug">
                    {story.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm text-white hover:bg-neutral-800 transition"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
