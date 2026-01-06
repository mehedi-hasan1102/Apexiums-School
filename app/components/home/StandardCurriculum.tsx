'use client';

import { useRef, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';

type CurriculumItem = {
  id: number;
  title: string;
  age: string;
  description: string;
  bg: string;
  readMoreColor: string;
  icon: string;
};

const curriculumData: CurriculumItem[] = [
  {
    id: 1,
    title: 'Kinder',
    age: '(3–6 Years)',
    description:
      'Nurture foundational skills and ignite curiosity through interactive learning designed for young minds.',
    bg: 'bg-cyan-100',
    readMoreColor: 'text-blue-600',
    icon: '/assets/kinder.png',
  },
  {
    id: 2,
    title: 'Elementary School',
    age: '',
    description:
      'Build strong academic foundations with a balanced approach to creativity, critical thinking, and problem-solving.',
    bg: 'bg-amber-100',
    readMoreColor: 'text-green-600',
    icon: '/assets/elementary.png',
  },
  {
    id: 3,
    title: 'Middle',
    age: '(10–16 Years)',
    description:
      'Empower students with advanced knowledge and life skills, preparing them for future academic and personal success.',
    bg: 'bg-purple-100',
    readMoreColor: 'text-red-500',
    icon: '/assets/middle.png',
  },
  {
    id: 4,
    title: 'High School',
    age: '(14–18 Years)',
    description:
      'Prepare students for higher education and careers through advanced academics, leadership, and personal development.',
    bg: 'bg-rose-100',
    readMoreColor: 'text-indigo-600',
    icon: '/assets/high-school.png',
  },
];

export default function StandardCurriculum() {
  const sliderRef = useRef<Slider | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.curriculum-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards stagger animation
      gsap.from('.curriculum-card', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="curriculum-title text-3xl font-semibold text-center mb-14">
          Standard Curriculum
        </h2>

        {/* Slider */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {curriculumData.map((item) => (
              <div key={item.id} className="px-3">
                <div
                  className={`curriculum-card ${item.bg} rounded-2xl shadow-sm p-8 text-center`}
                >
                  <div className="flex justify-center mb-6">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}{' '}
                    <span className="font-medium text-gray-700">
                      {item.age}
                    </span>
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mt-4 mb-6">
                    {item.description}
                  </p>

                  <button
                    className={`text-sm font-medium ${item.readMoreColor} hover:underline underline-offset-4`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white hover:bg-orange-500 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white hover:bg-orange-500 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
