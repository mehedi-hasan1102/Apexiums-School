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
  icon: string;
};

function CurriculumCard({ item }: { item: CurriculumItem }) {
  return (
    <article className="curriculum-card h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <p className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700 ${item.bg}`}>
          Stage {item.id}
        </p>
        <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2">
          <Image src={item.icon} alt={item.title} fill sizes="56px" className="object-contain p-2" />
        </div>
      </div>

      <h3 className="text-xl font-semibold leading-snug text-slate-900">
        {item.title}
        <span className="ml-2 text-base font-medium text-slate-500">{item.age}</span>
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>

      <button type="button" className="btn btn-secondary mt-6">
        Read More
      </button>
    </article>
  );
}

const curriculumData: CurriculumItem[] = [
  {
    id: 1,
    title: 'Kinder',
    age: '(3–6 Years)',
    description:
      'Nurture foundational skills and ignite curiosity through interactive learning designed for young minds.',
    bg: 'bg-cyan-100',
    icon: '/assets/kinder.png',
  },
  {
    id: 2,
    title: 'Elementary School',
    age: '',
    description:
      'Build strong academic foundations with a balanced approach to creativity, critical thinking, and problem-solving.',
    bg: 'bg-amber-100',
    icon: '/assets/elementary.png',
  },
  {
    id: 3,
    title: 'Middle',
    age: '(10–16 Years)',
    description:
      'Empower students with advanced knowledge and life skills, preparing them for future academic and personal success.',
    bg: 'bg-purple-100',
    icon: '/assets/middle.png',
  },
  {
    id: 4,
    title: 'High School',
    age: '(14–18 Years)',
    description:
      'Prepare students for higher education and careers through advanced academics, leadership, and personal development.',
    bg: 'bg-rose-100',
    icon: '/assets/high-school.png',
  },
];

export default function StandardCurriculum() {
  const sliderRef = useRef<Slider | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.curriculum-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50/80 via-white to-cyan-50/70" />

      <div className="page-wrap relative max-w-6xl">
        <div className="curriculum-heading mb-10 flex flex-col gap-5 border-b border-slate-200 pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Academic Pathway</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">Standard Curriculum</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              A stage-by-stage learning journey designed to build confidence, core knowledge, and future readiness.
            </p>
          </div>

          <div className="hidden gap-3 sm:flex lg:hidden">
            <button
              type="button"
              aria-label="Previous curriculum slide"
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <ArrowLeft size={19} />
            </button>
            <button
              type="button"
              aria-label="Next curriculum slide"
              onClick={() => sliderRef.current?.slickNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className="mb-2 hidden gap-6 lg:grid lg:grid-cols-4">
          {curriculumData.map((item) => (
            <div key={item.id}>
              <CurriculumCard item={item} />
            </div>
          ))}
        </div>

        <div className="relative lg:hidden curriculum-slider">
          <Slider ref={sliderRef} {...settings}>
            {curriculumData.map((item) => (
              <div key={item.id} className="px-3 pb-3">
                <CurriculumCard item={item} />
              </div>
            ))}
          </Slider>

          <div className="mt-10 flex justify-center gap-4 sm:hidden">
            <button
              type="button"
              aria-label="Previous curriculum slide"
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <ArrowLeft size={19} />
            </button>
            <button
              type="button"
              aria-label="Next curriculum slide"
              onClick={() => sliderRef.current?.slickNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
